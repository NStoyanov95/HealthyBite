import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule,RecipeRoutingModule],
})
export class RecipeModule {}
