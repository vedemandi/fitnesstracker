import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { MessagesService } from '../services/Messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';
import { User } from '../models/game';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Work } from '../models/work';
import { Location } from '@angular/common'; 

/**@Component({
  selector: 'app-calcal',
  templateUrl: './calcal.component.html',
  styleUrls: ['./calcal.component.css']
})
/**export class CalcalComponent implements OnInit {
  Me: User;
  
  constructor(
    private _Messages: MessagesService,
    private _Router: Router,
    private http: Http
  ){}
  /*constructor(
    
    private _Game: GameService,
    
  ) 
  }
*/
@Component({
  selector: 'calcal-form',
  templateUrl: './calcal.component.html'
})

export class CalcalComponent implements OnInit {
    WorkForm: FormGroup;
  exerciseForm: FormGroup;
  model: Work; 
  submittedModel: Work; 
  submitted: boolean = false;
  Me: User;
  Myworkouts: Work[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private _Messages: MessagesService,
    private _Location: Location) { }
  
  ngOnInit() {
      this.model = new Work('05/12/2018', 'Leg Work', '');
                   
      this.WorkForm = this.formBuilder.group({
        Date:     [this.model.Date],
        workout: [this.model.workout],
        Totaltime:    [this.model.Totaltime]
      });
  }

  onSubmit({ value, valid }: { value: Work, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
  submitForm(e: MouseEvent, text: string){
     this._Messages.Messages.push({ Text: 'Workout submitted!', Type: 'success'})
   }
   goBack(): void {
    this._Location.back();
  }
  }
