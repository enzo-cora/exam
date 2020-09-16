import { Injectable } from '@angular/core';
import { Router, UrlTree} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuardUnloggedService {

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
      this.router.navigate(['/liste'])
      return false
    }
    else {
      return true
    }


  }
}
