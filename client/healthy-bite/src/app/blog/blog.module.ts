import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ThemeCardComponent } from './theme-card/theme-card.component';

@NgModule({
  declarations: [ThemesComponent, ThemeCardComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
