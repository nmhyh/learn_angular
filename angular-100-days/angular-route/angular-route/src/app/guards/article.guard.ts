import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleGuard implements CanActivate, CanActivateChild {
  constructor(private readonly authService: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // return this.permissionService.hasPermission(next.data.permissions);
    return this.authService.currentUser.pipe(map((user) => !!user));
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    console.log(childRoute);
    const targetSlug = childRoute.params['slug'] || '';
    if (!targetSlug) {
      return of(false);
    }
    return this.authService.currentUser.pipe(
      map((user) => user.articles.includes(targetSlug))
    );
  }
}
