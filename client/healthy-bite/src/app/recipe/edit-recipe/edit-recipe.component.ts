import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent {
  constructor(private fb: FormBuilder) {}

  editRecipeForm = this.fb.group({
    recipeName: ['', Validators.required],
    imageUrl: ['', Validators.required],
    ingredients: this.fb.array([], Validators.required),
    instructions: ['', Validators.required],
  });

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
}
