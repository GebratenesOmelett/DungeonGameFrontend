import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerCreate} from "../../entity/player/player-create";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = "http://localhost:8080/api/players"
  constructor(private httpClient: HttpClient) { }

  registerPlayer(player: PlayerCreate): Observable<any>{
    return this.httpClient.post<PlayerCreate>(this.registerUrl, player);
  }
}
