import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetRandomMonsterService} from "../../../service/monsters/get-random-monster.service";
import {Monster} from "../../../entity/monster/monster";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit, OnDestroy {

  public monster!: Monster;
  public maxHealth!: number;
  private monsterSub?: Subscription;

  i = 0;

  constructor(private monsterService: GetRandomMonsterService) {
  }

  ngOnInit(): void {
    this.getMonster();
    this.initialize()
  }

  getMonster() {
    this.monsterSub = this.monsterService.getMonster().subscribe(monster => {
      this.monster = monster
      this.maxHealth = monster.health;
    });
  }
  initialize(){
    this.move();
  }

  ngOnDestroy(): void {
    this.monsterSub?.unsubscribe();
  }

  move() {
    if (this.i == 0) {
      this.i = 1;
      let elem = document.getElementById("myBar");
      let width = 1;
      let id = setInterval(frame, 10)
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width++;
          elem!.style.width = width + "%";
        }
      }
    }

  }

}
