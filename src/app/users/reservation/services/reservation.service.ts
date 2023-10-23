import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { Hotel } from 'src/app/features/hotels/interfaces/HotelInterfaz';
import { Room } from 'src/app/features/rooms/interfaces/RoomInterfas';
import { environment } from 'src/environments/environment';
import { HotelService } from '../../../features/hotels/services/hotel.service';
import { Reservation } from '../interfaces/ReservationInterfas';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = environment.baseUrl;
  private filteredRoomSubject = new BehaviorSubject<Room[]>([]);
  private filteredHotelsSubject = new BehaviorSubject<Hotel[]>([]);
  private dataRooms: any[] = [];

  constructor(private http: HttpClient, private _hotelService: HotelService) {}

  getFilteredHotels(): Observable<Hotel[]> {
    return this.filteredHotelsSubject.asObservable();
  }

  getHotels(params = {}): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`, { params }).pipe(
      map((hotels: Hotel[]) => {
        const activeHotels = hotels.filter((hotel) => hotel.status === 'active');
        this.filteredHotelsSubject.next(activeHotels);
        return activeHotels;
      })
    );
  }

  getRooms(params = {}) {
    return this.http
      .get<any[]>(`${this.apiUrl}/rooms?_expand=hotel`, { params: params })
      .pipe(
        map((data) => {
          const transformedData: Room[] = data
            .filter((item) => item.status === 'active')
            .map((item) => ({
              id: item.id,
              hotelId: item.hotelId,
              roomNumber: item.roomNumber,
              roomType: item.roomType,
              baseCost: item.baseCost,
              taxes: item.taxes,
              status: item.status,
              image: item.image,
              hotel: item.hotel,
            }));

          this.filteredRoomSubject.next(transformedData);

          return transformedData;
        })
      );
  }

  setFilter(hotelId: string) {
    if (hotelId) {
      const params = {
        status: 'active',
        hotelId: hotelId,
      };
      this.getRooms(params).subscribe();
    }
  }

  getFilteredRooms(): Observable<any[]> {
    return this.filteredRoomSubject.asObservable().pipe();
  }
  getActiveRoomsCount(): Observable<number> {
    return this.http
      .get<any[]>(`${this.apiUrl}/rooms`, { params: { status: 'active' } })
      .pipe(
        map((data) => data.length)
      );
  }


  setCityFilter(params = {}) {
    this.getHotels(params);
  }

  postReservation(body: Reservation) {
    return this.http.post<Reservation>(`${this.apiUrl}/reservations`, body);
  }

  updateRoomStatus(roomId: number, status: string) {
    const body = { status: status };
    return this.http.patch(`${this.apiUrl}/rooms/${roomId}`, body);
  }

  putReservation(id: number, body: Reservation) {
    return this.http.put(`${this.apiUrl}/reservations/${id}`, body);
  }
}
