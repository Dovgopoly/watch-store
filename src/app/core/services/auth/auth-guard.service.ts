import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router, private firebaseAuth: AngularFireAuth) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // checkLogin(url: string): boolean {
  //   console.log(this.authService.user);
  //   if (this.authService.AuthState) { return true; }

  //   // Store the attempted URL for redirecting
  //   // this.authService.redirectUrl = url;

  //   // Navigate to the home with extras
  //   this.router.navigate(['login']);
  //   return false;
  // }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   return this.af.auth.map((auth) =>  {
  //     if(auth == null) {
  //       this.router.navigate(['/login']);
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }).first();
  // }

}
