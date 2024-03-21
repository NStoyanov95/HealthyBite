import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProfile } from '../types/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getSingleUser(userId: string) {
    return this.http.get<UserProfile>(`/api/users/${userId}`);
  }

  attachFavoriteRecipe(userId: string, recipeId: string) {
    return this.http.post(`/api/users/attach/${userId}`, { userId, recipeId });
  }

  isRecipeInFavorite(userId: string, recipeId: string): Observable<boolean> {
    return this.http
      .get<string[]>(`/api/users/${userId}/favorites`)
      .pipe(map((favorites) => favorites.includes(recipeId)));
  }
}
