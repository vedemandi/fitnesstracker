import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/Game.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public Game: GameService) {

    }

  ngOnInit() {
  }

}
