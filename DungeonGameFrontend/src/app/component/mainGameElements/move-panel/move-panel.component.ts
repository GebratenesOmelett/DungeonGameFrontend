import {Component, Input} from '@angular/core';
import {Monster} from "../../../entity/monster/monster";

@Component({
  selector: 'app-move-panel',
  templateUrl: './move-panel.component.html',
  styleUrls: ['./move-panel.component.css']
})
export class MovePanelComponent {
  @Input() monster!: Monster;
  @Input() maxHealth!: number;
  attack() {
    let attack = 10;
    let health = 0;
    let maxH = 0;
    let elem = document.getElementById("myBar");
    // let id = setInterval(frame, 10)
    health = this.monster.health - attack;
    this.monster.health-=attack;
    maxH = this.maxHealth;
    elem!.style.width = ((health/maxH)*100) + "%";
    // function frame(){
    //   elem!.style.width = ((health/maxH)*100) + "%";
    // }
  }

  defence() {
    console.log("defence");
  }

  run() {
    console.log("run");
  }
}
