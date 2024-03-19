import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  createRecipeForm = this.fb.group({
    recipeName: ['', Validators.required],
    imageUrl: ['', Validators.required],
    ingredients: this.fb.array([], Validators.required),
    instructions: ['', Validators.required],
  });

  get ingredientControls() {
    return (this.createRecipeForm.get('ingredients') as FormArray).controls;
  }

  addIngredients() {
    const ingredients = this.createRecipeForm.get('ingredients') as FormArray;
    if (ingredients.length >= 5) {
      return;
    }
    ingredients.push(this.fb.control(''));
  }
  createRecipeHandler() {
    if (this.createRecipeForm.invalid) {
      return;
    }
    const recipeData = this.createRecipeForm.value as Recipe;
    let owner: string = localStorage.getItem('_id') || '';
    owner = owner.replace(/^"(.*)"$/, '$1');
    this.recipeService.createRecipe(recipeData, owner).subscribe((data) => {
      this.createRecipeForm.reset();
    });
  }
}
