import {Component,OnInit} from '@angular/core';
import {game} from '../../models/game';
import { User } from '../../models/game';
 @Component({
     selector:'app-game',
     templateUrl:'./game.component.html',
     styleUrls:['./game.component.css']
 })
 export class GameComponent implements OnInit {
     Model=new game();
     Me=new User
     constructor() {}
     this.Me.Name="Moshe Plotkin"
     ngOnInit() {
     }
     submitQuote(e: MouseEvent,Text: string,Playername:string) {
     e.preventDefault();
     if(this.MyPlayedQuote()) return;
     this.Model.playquote.push({Text:text,PlayerName:playername,Chosen:false});
     this.Model.MyQuotes.splice(this.Model.Myquotes.indexof(text),1)
     }
     MyPlayedQuote():Quote | null {
         return this.Model.PlayedQuotes.find(x => x.Playername==this.Me.Name);
     }
 }