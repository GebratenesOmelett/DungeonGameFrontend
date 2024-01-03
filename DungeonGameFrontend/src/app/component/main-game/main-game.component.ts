import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from "../../entity/hero/hero";
import {Subscription} from "rxjs";
import {GetHeroByUsernameService} from "../../service/hero/get-hero-by-username.service";
import {Monster} from "../../entity/monster/monster";
import {GetRandomMonsterService} from "../../service/monsters/get-random-monster.service";

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit,OnDestroy{
  public hero: Hero | undefined;
  private heroSub?: Subscription;
  public monster: Monster | undefined;
  public maxHealth!: number;
  private monsterSub?: Subscription;


  constructor(private heroService: GetHeroByUsernameService,
              private monsterService: GetRandomMonsterService) {
  }

  ngOnInit(): void {
    this.getHero();
    this.getMonster();
  }

  getHero() {
    this.heroSub = this.heroService.getHero().subscribe(hero => {
      this.hero = hero
      this.maxHealth = hero.hp;
    });
  }

  getMonster() {
    this.monsterSub = this.monsterService.getMonster().subscribe(monster => {
      this.monster = monster
      this.maxHealth = monster.health;
    });
  }

  ngOnDestroy(): void {
    this.heroSub?.unsubscribe();
    this.monsterSub?.unsubscribe();
  }
}

