import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BLogTheme } from '../types/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  createTheme(themeData: BLogTheme) {
    return this.http.post<BLogTheme>(`/api/blog/create`, { themeData });
  }
}
