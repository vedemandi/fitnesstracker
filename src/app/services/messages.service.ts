import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

    Messages: { Text: string, Type: 'success' | 'danger' } [];

  constructor() {
    this.Messages = [
        { Text: 'Welcome to FitnessTracker9000', Type: 'success'},
        { Text: 'What do you wanna check out today?', Type: 'success' }
    ];
  }

}
