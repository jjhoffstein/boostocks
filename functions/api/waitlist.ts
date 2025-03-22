export default {
  async fetch(request: Request, env: any, ctx: any): Promise<Response> {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
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

      // Create a new waitlist entry
      const waitlistEntry = {
        email: email.toLowerCase().trim(),
        name: name ? name.trim() : null,
        created_at: new Date().toISOString(),
        ip_address: request.headers.get('CF-Connecting-IP') || 'unknown',
        referrer: request.headers.get('Referer') || null,
        user_agent: request.headers.get('User-Agent') || null,
      };

      // Log the entry for debugging
      console.log('Waitlist signup:', waitlistEntry);

      // Check if database is available
      if (env.DB) {
        try {
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
              waitlistEntry.name,
              waitlistEntry.created_at,
              waitlistEntry.ip_address,
              waitlistEntry.referrer,
              waitlistEntry.user_agent
            )
            .run();
        } catch (dbError) {
          console.error('Database error:', dbError);
          // Continue execution even if database operations fail
        }
      } else {
        console.log('DB binding not available, skipping database operations');
      }

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
      console.error('Error processing waitlist signup:', error);
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
  }
};
