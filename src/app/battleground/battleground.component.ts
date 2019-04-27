import { Component, OnInit } from '@angular/core';
import { Fighter } from '../models';

@Component({
  selector: 'battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.scss']
})
export class BattlegroundComponent implements OnInit {

  constructor() { }

  fighters: Fighter[] = [{
    src : "../assets/images/the-wizard.png"
  },
  {
    src : "../assets/images/the-banker.png"
  },
  {
    src : "../assets/images/the-celebrity.png"
  },
  {
    src : "../assets/images/the-politician.png"
  },
  {
    src : "../assets/images/the-scientist.png"
  }]

  ngOnInit() {
  }

}
