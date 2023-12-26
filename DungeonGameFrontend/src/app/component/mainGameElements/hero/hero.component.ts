import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class HeroComponent implements OnInit,OnDestroy{
  public hero!: Hero;
  public maxHealth!: number;
  private heroSub?: Subscription;

  constructor(private heroService: GetHeroByUsernameService) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    this.heroSub = this.heroService.getHero().subscribe(hero => {
      this.hero = hero
      this.maxHealth = hero.hp;
    });
  }

  ngOnDestroy(): void {
    this.heroSub?.unsubscribe();
  }

}
