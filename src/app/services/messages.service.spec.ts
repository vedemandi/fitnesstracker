import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './Messages.service';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
