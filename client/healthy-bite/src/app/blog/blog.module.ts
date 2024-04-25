import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';

@NgModule({
  declarations: [ThemesComponent, ThemeCardComponent, MiniNavbarComponent, CreateThemeComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
