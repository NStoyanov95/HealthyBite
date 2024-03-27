import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}

  searchForm = this.fb.group({
    recipeName: [''],
  });

  ngOnInit(): void {
    this.loadAllRecipes();
  }

  loadAllRecipes() {
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  searchHandler() {
    const recipeName = this.searchForm.value.recipeName;
    if (recipeName?.trim()) {
      this.recipeService.searchRecipe(recipeName).subscribe((data) => {
        this.recipes = data;
      });
    } else {
      this.loadAllRecipes();
    }
  }
}
