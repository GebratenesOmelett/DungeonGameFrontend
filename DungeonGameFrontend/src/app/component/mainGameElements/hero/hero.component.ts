import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Monster} from "../../../entity/monster/monster";
import {Subscription} from "rxjs";
import {GetRandomMonsterService} from "../../../service/monsters/get-random-monster.service";
import {GetHeroByUsernameService} from "../../../service/hero/get-hero-by-username.service";
import {Hero} from "../../../entity/hero/hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent{
  @Input() maxHealth!: number;
  @Input() hero: Hero | undefined;
  // @Output("getMonster") getMonster: EventEmitter<any> = new EventEmitter<any>();
  // public hero: Hero | undefined;
  // public maxHealth!: number;

  constructor() {
  }

}
