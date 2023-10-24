import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, forkJoin, map, switchMap } from 'rxjs';
import { Room } from '../interfaces/RoomInterfas';
import { HotelService } from '../../hotels/services/hotel.service';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = environment.baseUrl;
  private filteredRoomSubject = new BehaviorSubject<Room[]>([]);
  private dataHotels: any[] = [];

  constructor(private http: HttpClient, private _hotelService: HotelService) {}

  getRooms(params = {}) {
    return this.http
      .get<any[]>(`${this.apiUrl}/rooms?_expand=hotel`, { params: params })
      .pipe(
        map((data) => {
          const transformedData: Room[] = data.map((item) => ({
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

  getFilteredRooms(): Observable<any[]> {
    return this.filteredRoomSubject.asObservable().pipe();
  }

  setFilter(filters: { hotelId?: string, status?: string }) {

    this.getRooms(filters).subscribe();
  }

  postRoom(body: Room) {
    return this.http.post<Room>(`${this.apiUrl}/rooms`, body);
  }

  putRoom(id: number, body = {}): Observable<any> {
    return this.http.put(`${this.apiUrl}/rooms/${id}`, body).pipe(
      switchMap(() => {
        return this.getRooms().pipe(
          map((data) => {
            const reversedData = data;
            this.dataHotels = reversedData;
            this.filteredRoomSubject.next(reversedData);
            return reversedData;
          })
        );
      })
    );
  }
}
