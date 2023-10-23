import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hotel } from '../interfaces/HotelInterfaz';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHotels(params = {}): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/hotels`, { params }).pipe(
      map((response: any) => response || [])
    );
  }

  getHotelsCount(): Observable<number> {
    return this.http
      .get<any[]>(`${this.apiUrl}/hotels`)
      .pipe(
        map((data) => data.length)
      );
  }

  postHotel(body: Hotel) {
    return this.http.post<Hotel>(`${this.apiUrl}/hotels`, body)
  }

  putHotel(id: number, body = {}) {
    return this.http.put(`${this.apiUrl}/hotels/${id}`, body)
  }


}
