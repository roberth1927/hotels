import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Reservation } from 'src/app/users/reservation/interfaces/ReservationInterfas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private apiUrl = environment.baseUrl;

  private filteredReservationsSubject = new BehaviorSubject<Reservation[]>([]);

  constructor(private http: HttpClient) {}

  /* getReservations(params = {}): Observable<Reservation[]> {
    return this.http
      .get<Reservation[]>(`${this.apiUrl}/reservations`, { params })
      .pipe(
        tap((reservations: Reservation[]) => {
          this.filteredReservationsSubject.next(reservations);
        })
      );
  } */

  getReservations(params = {}): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations?_expand=hotel`, { params }).pipe(
      map((response: any) => response || [])
    );
  }


  getFilteredReservations(): Observable<Reservation[]> {
    return this.filteredReservationsSubject.asObservable();
  }
}
