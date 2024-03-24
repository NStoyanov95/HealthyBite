import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
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
    }
    const recipeId = route.params['recipeId'];
    return this.recipeService.getSingleRecipe(recipeId).pipe(
      map((data) => {
        const userId = JSON.parse(localStorage.getItem('user') || '{}')._id;
        const recipeOwner = data.owner;
        if (recipeOwner !== userId) {
          this.router.navigate(['/404']);
          return false;
        }
        return true;
      })
    );
  }
}
