import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Monster} from "../../entity/monster/monster";

@Injectable({
  providedIn: 'root'
})
export class GetRandomMonsterService {

  private getRandomMonsterUrl = "http://localhost:8080/api/monsters/getRandom";
  constructor(private httpClient: HttpClient) { }

  getMonster(): Observable<Monster>{
    return this.httpClient.get<Monster>(this.getRandomMonsterUrl);
  }
}
