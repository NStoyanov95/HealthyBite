import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthActivate } from './core/guards/auth.guard';
import { ProfileComponent } from './auth/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthActivate] },
  {
    path: 'profile/:userId',
    component: ProfileComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
