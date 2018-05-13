import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Http } from "@angular/http";
import { Game, User } from '../models/game';
import { NgForm } from '@angular/forms';
import { MessagesService } from '../services/Messages.service';
import { GameService } from '../services/Game.service';
import { Router } from '@angular/router';
import { Work } from '../models/work'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

    Model = new Game();
    model: Object = {};
    Me: User;
    workouts: Work[] = [];

   
    private _api = "http://localhost:8080/game";

    constructor(
      private http: Http,
      private _Messages: MessagesService, 
      private _Game: GameService, 
      private _Router: Router,
      private _Location: Location
    ) {
        this.Me = _Game.Me;
        if(!this.Me){
            _Router.navigate(['/Login']);
        }
        this.join(this.Me.Name);

   setInterval(()=> this.refresh(), 10000)
  }
  
  ngOnInit() {
  }
  getWorkout() {
    return JSON.stringify(this.model);
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }
  
  join(name: string){
    this._Messages.Messages.push({ Text: 'Welcome lets get you fit ' + name , Type: 'success'})
    this.http.get(this._api + "/quotes", { params : { playerId: name } })
    
  }
  /*getWorkoutss(name: string){
    this.http.get(this._api + "/workouts", {params : { playerId: name}} )
    .subscribe(data => this.Me.MyWorkouts = data.json())
  }*/
  goBack(): void {
    this._Location.back();
  }
  submitted = false;

onSubmit() { this.submitted = true; }
  /**onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }*/
}
