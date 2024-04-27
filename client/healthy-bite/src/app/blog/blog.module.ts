import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ThemeCardComponent } from './theme-card/theme-card.component';
import { MiniNavbarComponent } from './mini-navbar/mini-navbar.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

@NgModule({
  declarations: [
    ThemesComponent,
    ThemeCardComponent,
    MiniNavbarComponent,
    CreateThemeComponent,
    ThemeDetailsComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, ReactiveFormsModule],
})
export class BlogModule {}
