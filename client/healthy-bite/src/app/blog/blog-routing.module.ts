import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
  },
  {
    path: 'theme-create',
    component: CreateThemeComponent,
  },
  {
    path: 'theme-details',
    component: ThemeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
