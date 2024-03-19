import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Recipe } from '../types/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes/catalog`);
  }
}
