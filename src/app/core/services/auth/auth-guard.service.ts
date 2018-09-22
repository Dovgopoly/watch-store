import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (route.routeConfig.path === 'login' || route.routeConfig.path === 'register'){
      return this.firebaseAuth.user.pipe(
        take(1),
        switchMap((user: firebase.User) => {
         if (user) {
           this.router.navigate(['watches']);
           return of(false);
         }
         return of(true);
        })
      );
    }
    return this.firebaseAuth.user.pipe(
      take(1),
      switchMap((user: firebase.User) => {
       if (!user) {
         this.router.navigate(['login']);
         return of(false);
       }
       return of(true);
      })
    );

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
