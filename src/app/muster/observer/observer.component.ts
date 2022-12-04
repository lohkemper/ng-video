import { Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-observer',
  template: ``,
  styles: []
})
export class ObserverComponent  {

  private itemSubject = new BehaviorSubject<any[]>([]);
  public item$ = this.itemSubject.asObservable();

  constructor() {}

  do() {
    this.itemSubject.next([1]);
  }
}
