import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule} from "@angular/router";
import { Error404Component } from './components/error404/error404.component';
import { HeaderComponent } from './components/header/header.component';
import {LoginIntercepteurProdiver} from "./services/interceptors/jwt-interceptor";
import {MessagesInterceptorProvider} from "./services/interceptors/messages-interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    LoginIntercepteurProdiver,
    MessagesInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
