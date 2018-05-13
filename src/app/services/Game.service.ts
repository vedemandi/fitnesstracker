import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './Messages.service';
import { User } from '../models/game';
import { Router } from '@angular/router';
import {Game} from '../models/game';
import { Work } from '../models/work';

@Injectable()
export class GameService {
private _api="http//localhost:4200/game";
 Workstack=[];
    Me: User;
    model:Game;
    

  constructor(private http: Http, private _Messages: MessagesService, private _Router: Router) {this.Workstack["jog,Weights,fitcycle,legpress"];
      
  }

  login(name: string, password: string){
      if(password == '123'){
        this.Me = {Name: name,MyExerciseList: [],Record: [],Date: null};
        this._Router.navigate(['/game']);
    }
}

oAuthLogin(name: string, token:string, pic: string){
  this.Me = { Name:name,MyExerciseList:[],Record:[],Date: null};
  this.http.get(this._api + "/login",{params : {name:name,MyExerciseList:[],Record:[],Date:null}})
  this._Router.navigate(['/game']);
}

}