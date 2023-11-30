import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerLogin} from "../../entity/player/player-login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "http://localhost:8080/api/players/login";

  constructor(private httpClient: HttpClient) { }

  loginPLayer(player: PlayerLogin): Observable<any>{
    return this.httpClient.post<PlayerLogin>(this.loginUrl, player);
  }
}
