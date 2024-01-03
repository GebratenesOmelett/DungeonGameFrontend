import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {SiteComponent} from './component/site/site.component';
import {NavbarComponent} from './component/siteElements/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RegisterSuccedComponent} from "./component/siteElements/register-succed/register-succed.component";
import {MainGameComponent} from './component/main-game/main-game.component';
import {ChatComponent} from './component/mainGameElements/chat/chat.component';
import {NavbarInGameComponent} from './component/mainGameElements/navbar-in-game/navbar-in-game.component';

import {MovePanelComponent} from './component/mainGameElements/move-panel/move-panel.component';
import {MonstersComponent} from "./component/mainGameElements/monsters/monsters.component";
import {HeroComponent} from "./component/mainGameElements/hero/hero.component";




@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        SiteComponent,
        NavbarComponent,
        RegisterSuccedComponent,
        MainGameComponent,
        ChatComponent,
        NavbarInGameComponent,
        MonstersComponent,
        MovePanelComponent,
        MonstersComponent,
        HeroComponent,
        HeroComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
