import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  get isOwner(): boolean {
    if (
      this.recipe?.owner == JSON.parse(localStorage.getItem('user') || '{}')._id
    ) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];

    this.recipeService.getSingleRecipe(recipeId).subscribe((data) => {
      this.recipe = data;
    });
  }

  handleDelete() {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService
      .deleteRecipe(recipeId)
      .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/recipes/catalog'])
      });
  }
}
