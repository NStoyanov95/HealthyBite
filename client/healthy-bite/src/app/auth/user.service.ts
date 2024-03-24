import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FavoriteResponse,
  User,
  UserForAuth,
  UserProfile,
} from '../types/user';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
  user$ = this.user$$.asObservable();

  user: UserForAuth | undefined;

  userSubscription: Subscription;

  constructor(private http: HttpClient) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }
  login(email: string, password: string) {
    const body = { email, password };

    return this.http
      .post<UserForAuth>(`/api/users/login`, body)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(email: string, username: string, password: string, rePass: string) {
    const body = { email, username, password, rePass };

    return this.http
      .post<UserForAuth>(`/api/users/register`, body)
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => this.user$$.next(undefined)));
  }

  getSingleUser(userId: string) {
    return this.http.get<UserProfile>(`/api/users/${userId}`);
  }

  attachFavoriteRecipe(userId: string, recipeId: string) {
    return this.http.post(`/api/users/attach/${userId}`, { userId, recipeId });
  }

  removeFavoriteRecipe(userId: string, recipeId: string) {
    return this.http.post(`/api/users/removeRecipe/${userId}`, {
      userId,
      recipeId,
    });
  }

  isRecipeInFavorite(userId: string, recipeId: string): Observable<boolean> {
    return this.http
      .get<string[]>(`/api/users/${userId}/favorites`)
      .pipe(map((favorites) => favorites.includes(recipeId)));
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
