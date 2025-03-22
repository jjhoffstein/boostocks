import { NextRequest, NextResponse } from 'next/server';

// Specify Edge runtime for Cloudflare Pages compatibility
export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, name } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create waitlist entry
    const waitlistEntry = {
      email: email.toLowerCase().trim(),
      name: name ? name.trim() : null,
      created_at: new Date().toISOString(),
    };

    // Log the entry (useful for both development and production)
    console.log('Waitlist signup:', waitlistEntry);

    // Always return success for now (both dev and production)
    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
    });

  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request. Please try again later.',
      },
      { status: 500 }
    );
  }
} 