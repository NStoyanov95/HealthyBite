import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  get isOwner(): boolean {
    if (
      this.recipe?.owner == localStorage.getItem('_id')?.replaceAll('"', '')
    ) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];

    this.recipeService.getSingleRecipe(recipeId).subscribe((data) => {
      this.recipe = data;
      console.log(this.recipe.owner?.toString() == localStorage.getItem('_id'));
      console.log(this.recipe.owner);
      console.log(localStorage.getItem('_id'));
    });
  }
}
