import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { FormBuilder } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  recipes: Recipe[] = [];
  searchSubscription: Subscription | undefined;
  isLoading: boolean = true;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}

  searchForm = this.fb.group({
    recipeName: [''],
  });

  ngOnInit(): void {
    this.loadAllRecipes();

    this.searchSubscription = this.searchForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        this.searchHandler();
      });
  }

  loadAllRecipes() {
    this.recipeService.getAllRecipes().subscribe((data) => {
      this.recipes = data;
      this.isLoading = false;
    });
  }

  searchHandler() {
    const recipeName = this.searchForm.value.recipeName;
    if (recipeName?.trim()) {
      this.recipeService.searchRecipe(recipeName).subscribe((data) => {
        this.recipes = data;
        this.isLoading = false;
      });
    } else {
      this.loadAllRecipes();
    }
  }
}
