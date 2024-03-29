import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CatalogComponent, RecipeDetailsComponent, CreateRecipeComponent, EditRecipeComponent],
  imports: [CommonModule,RecipeRoutingModule, ReactiveFormsModule, SharedModule],
})
export class RecipeModule {}
