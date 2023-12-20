import {Component, OnInit} from '@angular/core';
import {GetRandomMonsterService} from "../../../service/monsters/get-random-monster.service";
import {Monster} from "../../../entity/monster/monster";

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  public monster?: Monster;

  constructor(private monsterService: GetRandomMonsterService) {
  }

  ngOnInit(): void {
    this.monsterService.getMonster().subscribe(monster => this.monster = monster);
    console.log(this.monster);
  }

}
