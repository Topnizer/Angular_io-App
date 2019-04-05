// Route Guard to Authenticate a Logged In user
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivate, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem("loggedIn")=== "true")
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }

  }
  }
  