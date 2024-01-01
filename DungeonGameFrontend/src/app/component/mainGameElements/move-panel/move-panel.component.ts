import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetRandomMonsterService} from "../../../service/monsters/get-random-monster.service";
import {GetHeroByUsernameService} from "../../../service/hero/get-hero-by-username.service";

@Component({
  selector: 'app-move-panel',
  templateUrl: './move-panel.component.html',
  styleUrls: ['./move-panel.component.css']
})
export class MovePanelComponent {
  @Input() maxHealth!: number;
  @Output("getMonster") getMonster: EventEmitter<any> = new EventEmitter<any>();
  constructor(private monsterService: GetRandomMonsterService,
              private heroService: GetHeroByUsernameService) {
  }
  attack() {
    this.monsterService.attackMonster(this.heroService.getHeroAttackpower());
    this.updateMonsterHealth()
    if(this.monsterService.getMonsterHealth() <= 0){
      this.getMonster.emit();
      this.fullMonsterHealth()
    }
  }
  defence() {
    console.log("defence");
  }

  run() {
    this.getMonster.emit();
    this.fullMonsterHealth()

  }
  updateMonsterHealth(){
    let elem = document.getElementById("myBar");
    elem!.style.width = ((this.monsterService.getMonsterHealth()/this.maxHealth)*100) + "%";
  }
  fullMonsterHealth(){
    let elem = document.getElementById("myBar");
    elem!.style.width = ("100%");
  }
}
