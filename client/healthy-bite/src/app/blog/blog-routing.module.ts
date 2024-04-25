import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
  },
  {
    path: 'create-theme',
    component: CreateThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
