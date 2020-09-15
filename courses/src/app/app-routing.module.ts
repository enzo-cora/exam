import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {ListComponent} from "./components/list/list.component";
import {Error404Component} from "./components/error404/error404.component";
import {GuardLoggedService} from "./services/guards/guard-logged.service";
import {GuardUnloggedService} from "./services/guards/guard-unlogged.service";

const routerOptions: ExtraOptions
  = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  {path : 'liste', component : ListComponent, canActivate : [GuardLoggedService]},
  {path : 'authentification',canActivate : [GuardUnloggedService],children : [
          {path : 'connexion', component : LoginComponent},
          {path : 'inscription', component : RegisterComponent},
    ]},
  {path: '', pathMatch : 'full', redirectTo : "/liste" },
  {path : '**', component : Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
