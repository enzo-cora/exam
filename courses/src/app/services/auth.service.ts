import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {BehaviorSubject, Subject} from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  isAuthSubject = new BehaviorSubject<boolean>(false)
  userSubject = new BehaviorSubject<User>(null)
  user : User
  url = location.protocol +'//'+ location.hostname + '/api1'  + '/authentification'


  constructor(
    private http : HttpClient
  ) { }

  emmitIsAuth(content){
    this.isAuthSubject.next(content)
  }
  emmitUser(user){
    this.userSubject.next(user)
    this.user = user
  }
  newUser(content){
    return this.http.post(this.url + '/register', content)
  }
  getUser(){
    this.http.get(this.url+'/user').subscribe(
      user => this.emmitUser(user)
    )
  }
  connect(content){
    return this.http.post(this.url + '/login', content)
  }
  logout() {
    localStorage.removeItem('token')
    this.emmitIsAuth(false)
    this.emmitUser(null)
  }
  isAuth () {
    let token = localStorage.getItem('token')
    if(token){
      try{
        let helper = new JwtHelperService
        let decodedToken =  helper.decodeToken(token);
        if (decodedToken['exp'] < Date.now() / 1000 ){
          localStorage.removeItem('token')
          this.logout()
        }else{
          this.emmitIsAuth(true)
          if (!this.userSubject.getValue()){
            this.getUser()
          }
        }
      }
      catch(Error){
        this.logout()
      }
    }else{
      this.logout()
    }

  }
}
