import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

const workouts = [Jogging,weights,fitcycle];

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './typeahead-basic.html',
  styles: [`.form-control { width: 300px; }`]
})
export class NgbdTypeaheadBasic {
  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : workouts.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

}
