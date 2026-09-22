import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hotelName, hotelEmail, bookingForm, userEmail } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/^["']|["']$/g, ''),
      },
    });

    // Email content
    const emailSubject = `New Booking Request for ${hotelName}`;
    const emailBody = `
      <h1>New Booking Request</h1>
      <p><strong>Hotel:</strong> ${hotelName}</p>
      <p><strong>Check-in:</strong> ${bookingForm.checkIn}</p>
      <p><strong>Check-out:</strong> ${bookingForm.checkOut}</p>
      <p><strong>Adults:</strong> ${bookingForm.adults}</p>
      <p><strong>Children:</strong> ${bookingForm.children}</p>
      <p><strong>Room Type:</strong> ${bookingForm.roomType}</p>
      <p><strong>Customer Email:</strong> ${userEmail}</p>
    `;

    // Send to hotel and customer
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: `${hotelEmail}, ${userEmail}`, // Sending to both parties
      subject: emailSubject,
      html: emailBody,
    });

    return NextResponse.json({ success: true, message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Booking email failed:', error);
    return NextResponse.json({ success: false, message: 'Failed to send booking request' }, { status: 500 });
  }
}
