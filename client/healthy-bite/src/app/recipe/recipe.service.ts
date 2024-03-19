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

  getSingleRecipe(recipeId: string) {
    return this.http.get<Recipe>(
      `${environment.apiUrl}/recipes/details/${recipeId}`
    );
  }
  getLastThreeRecipes() {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes/lastThree`);
  }

  createRecipe(recipeData: Recipe, owner: string) {
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes/create`, {
      recipeData,
      owner,
    });
  }
}
