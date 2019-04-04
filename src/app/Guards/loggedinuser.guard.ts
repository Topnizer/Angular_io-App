// Route Guard to guard login and register page
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivate, Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(localStorage.getItem("loggedIn")=== "true")
    {
      console.log("false");
      this.router.navigate(['/nav/profile']);
      return false;
    }
    else{
      console.log("true");
      return true;
    }

  }
  }
  