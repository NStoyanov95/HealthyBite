import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatalogComponent, RecipeDetailsComponent, CreateRecipeComponent],
  imports: [CommonModule,RecipeRoutingModule, ReactiveFormsModule],
})
export class RecipeModule {}
