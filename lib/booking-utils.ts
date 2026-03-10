// lib/booking-utils.ts
export interface BookingDetails {
    hotelId: string;
    roomId: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    totalPrice: number;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    specialRequests?: string;
  }
  
  export function calculateNights(checkIn: string, checkOut: string): number {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  export function calculateTotalPrice(pricePerNight: number, nights: number): number {
    // Add any additional fees or taxes here
    const subtotal = pricePerNight * nights;
    const tax = subtotal * 0.16; // 16% VAT in Kenya
    return subtotal + tax;
  }
  
  export function validateBookingDates(checkIn: string, checkOut: string): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    return (
      checkInDate >= today &&
      checkOutDate > checkInDate
    );
  }
  
  export function generateBookingReference(): string {
    const prefix = 'JTE';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }