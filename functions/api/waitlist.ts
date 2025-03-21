import { D1Database } from '@cloudflare/workers-types';

export interface Env {
  DB: D1Database;
  ADMIN_EMAIL: string;
}

// Interface for a waitlist entry
interface WaitlistEntry {
  email: string;
  name?: string;
  created_at: string;
  ip_address: string;
  referrer?: string;
  user_agent?: string;
}

// Response type
type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

export const onRequest = async (context: {
  request: Request;
  env: Env;
  params: any;
}): Promise<Response> => {
  const { request, env } = context;

  // Only allow POST requests
  if (request.method !== 'POST') {
    // Handle OPTIONS request (CORS preflight)
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Method not allowed',
      }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
        },
      }
    );
  }

  try {
    // Parse the request body
    const body = await request.json();
    const { email, name } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email is required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Get user's IP address, referrer, user agent
    const ip_address = request.headers.get('CF-Connecting-IP') || 'unknown';
    const referrer = request.headers.get('Referer') || undefined;
    const user_agent = request.headers.get('User-Agent') || undefined;

    // Create a new waitlist entry
    const waitlistEntry: WaitlistEntry = {
      email: email.toLowerCase().trim(),
      name: name ? name.trim() : undefined,
      created_at: new Date().toISOString(),
      ip_address,
      referrer,
      user_agent,
    };

    // Check if email already exists in the waitlist
    const existingEmail = await env.DB.prepare(
      'SELECT email FROM waitlist WHERE email = ?'
    )
      .bind(waitlistEntry.email)
      .first();

    if (existingEmail) {
      return new Response(
        JSON.stringify({
          success: true,
          message: 'You are already on our waitlist!',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Insert the new waitlist entry into the database
    await env.DB.prepare(
      `INSERT INTO waitlist (email, name, created_at, ip_address, referrer, user_agent) 
       VALUES (?, ?, ?, ?, ?, ?)`
    )
      .bind(
        waitlistEntry.email,
        waitlistEntry.name || null,
        waitlistEntry.created_at,
        waitlistEntry.ip_address,
        waitlistEntry.referrer || null,
        waitlistEntry.user_agent || null
      )
      .run();

    // Send notification email to admin (commented out for now, enable when needed)
    /*
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: env.ADMIN_EMAIL }],
          },
        ],
        from: { email: 'notifications@boostocks.com' },
        subject: 'New Waitlist Signup!',
        content: [
          {
            type: 'text/plain',
            value: `New signup: ${waitlistEntry.email} ${waitlistEntry.name ? `(${waitlistEntry.name})` : ''}`,
          },
        ],
      }),
    });
    */

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Successfully joined the waitlist!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    // Log the error (Cloudflare Workers automatically log errors)
    console.error('Error processing waitlist signup:', error);

    // Return error response
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to process your request. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}; 