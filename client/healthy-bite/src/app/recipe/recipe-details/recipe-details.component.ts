import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe | undefined;
  isRecipeFavorite: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  get isOwner(): boolean {
    if (
      this.recipe?.owner == JSON.parse(localStorage.getItem('user') || '{}')._id
    ) {
      return true;
    }
    return false;
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('user') || '{}')._id;
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];


    this.recipeService.getSingleRecipe(recipeId).subscribe((data) => {
      this.recipe = data;
    });
  }

  handleDelete() {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];
    this.recipeService.deleteRecipe(recipeId).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/recipes/catalog']);
    });
  }

  attachHandler() {
    const recipeId = this.activatedRoute.snapshot.params['recipeId'];
    const userId = JSON.parse(localStorage.getItem('user') || '{}')._id;

    this.userService
      .attachFavoriteRecipe(userId, recipeId)
      .subscribe((data) => {
        this.router.navigate([`/recipes/details/${recipeId}`]);
        this.isRecipeFavorite = true;
      });

 
    if (this.isLogged) {
      this.userService
        .isRecipeInFavorite(userId, recipeId)
        .subscribe((isFavorite) => {
          this.isRecipeFavorite = isFavorite;
        });
    }

  }

  
}
