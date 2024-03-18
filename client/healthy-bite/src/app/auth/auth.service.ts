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

  register(email: string, username: string, password: string, rePass: string) {
    const body = { email, username, password, rePass };

    return this.http.post<User>(`${environment.apiUrl}user/register`, body);
  }

  logout(){
    localStorage.clear();
  }
}
