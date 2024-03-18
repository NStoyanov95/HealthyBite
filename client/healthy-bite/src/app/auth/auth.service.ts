import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get isLogged(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  login(email: string, password: string) {
    const body = { email, password };

    return this.http.post<User>(`${environment.apiUrl}/user/login`, body);
  }

  register(email: string, username: string, password: string, rePass: string) {
    const body = { email, username, password, rePass };

    return this.http.post<User>(`${environment.apiUrl}/user/register`, body);
  }

  logout() {
    localStorage.clear();
  }
}
