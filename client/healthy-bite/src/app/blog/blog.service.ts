import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogTheme } from '../types/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  createTheme(themeData: BlogTheme) {
    return this.http.post<BlogTheme>(`/api/blog/create`, { themeData });
  }
}
