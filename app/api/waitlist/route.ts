import { NextRequest, NextResponse } from 'next/server';

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

    // In development, just log the entry and return success
    console.log('Waitlist signup (DEV MODE):', {
      email: email.toLowerCase().trim(),
      name: name ? name.trim() : null,
      created_at: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist! (DEV MODE)',
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