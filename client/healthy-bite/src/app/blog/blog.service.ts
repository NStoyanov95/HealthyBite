import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BLogThemeResponse, BlogTheme } from '../types/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  createTheme(themeData: BlogTheme) {
    return this.http.post<BLogThemeResponse>(`/api/blog/create`, { themeData });
  }

  getAll() {
    return this.http.get<BLogThemeResponse[]>(`/api/blog/themes`);
  }
}
