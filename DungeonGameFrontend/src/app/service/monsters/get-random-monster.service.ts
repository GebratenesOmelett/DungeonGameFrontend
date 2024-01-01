import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, exhaustMap, Observable, take, tap} from "rxjs";
import {Monster} from "../../entity/monster/monster";
import {LoginService} from "../authorization/login.service";

@Injectable({
  providedIn: 'root'
})
export class GetRandomMonsterService {

  private getRandomMonsterUrl = "http://localhost:8080/api/monsters/getRandom";
  monster = new BehaviorSubject<Monster>(null!);
  constructor(private httpClient: HttpClient,
              private loginService: LoginService) { }

  getMonster(): Observable<Monster>{
    return this.loginService.player.pipe(take(1), exhaustMap(player => {
      let headers_object = new HttpHeaders().set("Authorization", "Bearer " + player.token);
      return this.httpClient.get<Monster>(this.getRandomMonsterUrl, {headers: headers_object}).pipe(tap(
        monster =>{
          this.monster.next(monster);
          console.log(monster)
        }
      ));
    }));
  }
  getMonsterHealth(): number{
    return this.monster.value.health
  }
  attackMonster(attackPower: number) {
    this.monster.value.health = this.monster.value.health - attackPower;
    this.monster.next(this.monster.value);
  }
  run(){
    this.getMonster();
  }
}
