import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegistrationComponent} from "./component/registration/registration.component";
import {SiteComponent} from "./component/site/site.component";
import {MainGameComponent} from "./component/main-game/main-game.component";

export const routes: Routes = [
  {path: 'game', component: MainGameComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: SiteComponent},
  {path: '', redirectTo: '/home', pathMatch:"full"},
  {path: '**', redirectTo: '/home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
