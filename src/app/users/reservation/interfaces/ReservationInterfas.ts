import { Hotel } from "src/app/features/hotels/interfaces/HotelInterfaz";

export interface Reservation {
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: string;
  documentType: string;
  documentNumber: string;
  email: string;
  contactPhone: string;
  status: string;
  contactName: string;
  emergencyContactPhone: string;
  hotelId: number;
  roomId: number;
  numberOfPeople: number;
  checkInDate: Date;
  checkOutDate: Date;
  hotel: Hotel
}
