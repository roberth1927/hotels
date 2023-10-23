import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl;

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/login?email=${email}&password=${password}`)
      .pipe(
        map((response: any) => {
          const isLoggedIn = response && response.length > 0;
          this.loggedIn.next(isLoggedIn);
          return isLoggedIn;
        })
      );
  }

  logout() {
    this.loggedIn.next(false);
  }
}
