import { Component } from '@angular/core';

@Component({
  selector: 'app-move-panel',
  templateUrl: './move-panel.component.html',
  styleUrls: ['./move-panel.component.css']
})
export class MovePanelComponent {

  attack() {
    console.log("attack");
  }

  defence() {
    console.log("defence");
  }

  run() {
    console.log("run");
  }
}
