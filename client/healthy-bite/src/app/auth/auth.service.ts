import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private setLocalService(res: User) {
    localStorage.setItem('user', JSON.stringify(res));
  }

  get isLogged(): boolean {
    return !!localStorage.getItem('user');
  }

  login(email: string, password: string) {
    const body = { email, password };

    return this.http
      .post<User>(`/api/users/login`, body)
      .pipe(tap((res) => this.setLocalService(res)));
  }

  register(email: string, username: string, password: string, rePass: string) {
    const body = { email, username, password, rePass };

    return this.http
      .post<User>(`/api/users/register`, body)
      .pipe(tap((res) => this.setLocalService(res)));
  }

  logout() {
    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => localStorage.clear()));
  }

  attachFavoriteRecipe(userId:string, recipeId:string){
    return this.http.post(`/api/users/attach/${userId}`, {userId, recipeId})
  }
}
