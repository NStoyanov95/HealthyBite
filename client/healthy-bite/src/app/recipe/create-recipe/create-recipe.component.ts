import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
})
export class CreateRecipeComponent {
  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private userService: UserService,
    private router: Router
  ) {}

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
    if (ingredients.length >= 9) {
      return;
    }
    ingredients.push(this.fb.control('', Validators.required));
  }
  createRecipeHandler() {
    if (this.createRecipeForm.invalid) {
      return;
    }
    const recipeData = this.createRecipeForm.value as Recipe;
    let owner: string = this.userService.user?._id || '';
    this.recipeService.createRecipe(recipeData, owner).subscribe((data) => {
      this.createRecipeForm.reset();
      this.router.navigate(['/recipes/catalog']);
    });
  }
}
