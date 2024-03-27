import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  recipeId: string = '';

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  editRecipeForm = this.fb.group({
    recipeName: ['', Validators.required],
    imageUrl: ['', Validators.required],
    difficulty: ['', Validators.required],
    ingredients: this.fb.array([], Validators.required),
    instructions: ['', Validators.required],
  });

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService
      .getSingleRecipe(this.recipeId)
      .subscribe((data) => this.populateEditForm(data));
  }

  get ingredientControls() {
    return (this.editRecipeForm.get('ingredients') as FormArray).controls;
  }

  addIngredients() {
    const ingredients = this.editRecipeForm.get('ingredients') as FormArray;
    if (ingredients.length >= 5) {
      return;
    }
    ingredients.push(this.fb.control('', Validators.required));
  }

  populateEditForm(recipeData: Recipe) {
    this.editRecipeForm.patchValue({
      recipeName: recipeData.recipeName,
      imageUrl: recipeData.imageUrl,
      difficulty: recipeData.difficulty,
      instructions: recipeData.instructions,
    });

    const ingredientsArray = this.editRecipeForm.get(
      'ingredients'
    ) as FormArray;

    recipeData.ingredients.forEach((ingredient) => {
      ingredientsArray.push(this.fb.control(ingredient, Validators.required));
    });
  }

  editRecipeHandler() {
    const recipeData = this.editRecipeForm.value as Recipe;

    if (this.editRecipeForm.invalid) {
      return;
    }

    this.recipeService.updateRecipe(recipeData, this.recipeId).subscribe({
      next: (data) => {
        this.router.navigate([`/recipes/details/${this.recipeId}`]);
      },
      error: (error) => {
        console.error('Error updating recipe: ' + error);
      },
    });
  }
}
