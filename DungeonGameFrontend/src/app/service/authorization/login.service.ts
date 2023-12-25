import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlayerLogin} from "../../entity/player/player-login";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import {Player} from "../../entity/player/player";
import {AuthenticationResponse} from "../../entity/auth/authentication-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = "http://localhost:8080/api/players/login";

  player = new BehaviorSubject<Player>(null!);

  constructor(private httpClient: HttpClient) {
  }

  loginPLayer(player: PlayerLogin): Observable<any> {
    return this.httpClient.post<AuthenticationResponse>(this.loginUrl, player)
      .pipe(
        tap(resData =>{
          const expirationDate = new Date(new Date().getTime() + +resData.expiresIn);
          const player =new Player(resData.email, resData.userName, resData.token, expirationDate);
          this.player.next(player);
        })
      )
  }
}
