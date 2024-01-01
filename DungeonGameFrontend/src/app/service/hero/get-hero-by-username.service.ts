import { Injectable } from '@angular/core';
import {BehaviorSubject, exhaustMap, take, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Monster} from "../../entity/monster/monster";
import {LoginService} from "../authorization/login.service";
import {Hero} from "../../entity/hero/hero";

@Injectable({
  providedIn: 'root'
})
export class GetHeroByUsernameService {
  private getHeroUrl = "http://localhost:8080/api/heroes/get/";
  hero = new BehaviorSubject<Hero>(null!);
  constructor(private loginService: LoginService,
              private httpClient: HttpClient) { }

  getHero(){
    return this.loginService.player.pipe(take(2), exhaustMap(player => {
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + player.token);
      let getFullHeroUrl = this.getHeroUrl + player.userName;
      return this.httpClient.get<Hero>(getFullHeroUrl, {headers: headers_object}).pipe(tap(
        hero =>{
          this.hero.next(hero);
        }
      ));
    }));
  }
  getHeroAttackpower(): number{
    return this.hero.value.attackPower;
  }
}
