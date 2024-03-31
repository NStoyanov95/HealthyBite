import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-last-three-recipes',
  templateUrl: './last-three-recipes.component.html',
  styleUrls: ['./last-three-recipes.component.css'],
})
export class LastThreeRecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading: boolean = true;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getLastThreeRecipes().subscribe((data) => {
      this.recipes = data;
      this.isLoading = false;
    });
  }
}
