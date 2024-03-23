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
    return this.http.get<Recipe[]>(`/api/recipes/catalog`);
  }

  getSingleRecipe(recipeId: string) {
    return this.http.get<Recipe>(`/api/recipes/details/${recipeId}`);
  }
  getLastThreeRecipes() {
    return this.http.get<Recipe[]>(`/api/recipes/lastThree`);
  }

  createRecipe(recipeData: Recipe, owner: string) {
    return this.http.post<Recipe>(`/api/recipes/create`, {
      recipeData,
      owner,
    });
  }

  updateRecipe(recipeData: Recipe, recipeId: string) {
    return this.http.put<Recipe>(`/api/recipes/edit/${recipeId}`, recipeData);
  }

  deleteRecipe(recipeId: string) {
    return this.http.delete<Recipe>(`/api/recipes/delete/${recipeId}`);
  }
}
