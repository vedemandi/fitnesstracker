import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { MessagesService } from './services/Messages.service';
import { GameService } from './services/Game.service';
import { LoginComponent } from './login/login.component';
import { CalcalComponent } from './calcal/Calcal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    GameComponent,
    CalcalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'game', component: GameComponent },
        { path: 'login', component: LoginComponent },
        {path:'calcal', component:CalcalComponent},
        
        { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
