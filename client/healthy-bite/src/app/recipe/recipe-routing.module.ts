import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: 'catalog',
        component: CatalogComponent,
      },
      {
        path: 'details/:recipeId',
        component: RecipeDetailsComponent,
      },
      {
        path: 'create',
        component: CreateRecipeComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
