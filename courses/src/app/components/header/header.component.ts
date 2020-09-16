import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth : boolean
  isAuthSub : Subscription
  nameSub : Subscription
  name : string
  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.isAuthSub = this.authService.isAuthSubject.subscribe(
      bool => this.isAuth = bool
    )
    this.nameSub = this.authService.userSubject.subscribe(
      user => {this.name = user?.name}
    )
    this.authService.isAuth()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/authentification/connexion'])
  }

}
