import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/types/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {

    this.recipeService.getAllRecipes().subscribe((data)=>{
      this.recipes = data
    })
  }
}
