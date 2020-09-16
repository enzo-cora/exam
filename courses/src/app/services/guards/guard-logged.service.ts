import { Injectable } from '@angular/core';
import { Router, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuardLoggedService {

  isAuth : boolean
  constructor(
    private authService :AuthService,
    private router: Router
  ) {
    this.authService.isAuthSubject.subscribe(
      (bool) => {
        this.isAuth = bool
      }
    )
  }

  canActivate()
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isAuth){
      return true
    }
    else {
      this.router.navigate(['authentification/connexion'])
      return false
    }

  }
}
