import { Hotel } from "../../hotels/interfaces/HotelInterfaz";

export interface Room {
  id: number;
  hotelId: number;
  roomNumber: number;
  roomType: string;
  baseCost: number;
  taxes: number;
  status: string;
  image: string;
  hotel: Hotel
}
