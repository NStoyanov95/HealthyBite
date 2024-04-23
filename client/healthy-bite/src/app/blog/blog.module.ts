import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [ThemesComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
