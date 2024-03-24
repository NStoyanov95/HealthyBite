import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/auth/user.service';
import { RecipeService } from 'src/app/recipe/recipe.service';

@Injectable({ providedIn: 'root' })
export class recipeOwnerActivate implements CanActivate {
  recipeOwner: string | undefined = '';
  constructor(
    private userService: UserService,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!this.userService.isLogged) {
      this.router.navigate(['/404']);
      return false;
    } else {
      const recipeId = route.params['recipeId'];
      this.recipeService.getSingleRecipe(recipeId).subscribe((data) => {
        this.recipeOwner = data.owner;
        const userId = JSON.parse(localStorage.getItem('user') || '{}')._id;
        if (this.recipeOwner !== userId) {
          this.router.navigate(['/']);
          return false;
        }
        return true;
      });
      return true;
    }
  }
}
