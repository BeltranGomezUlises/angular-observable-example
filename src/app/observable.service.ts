import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  subject = new Subject<string>();

  constructor() { }

  subscribe(onNext: (text: string) => void): Subscription {
    return this.subject.subscribe(onNext);
  }

  nextValue(text: string){
    this.subject.next(text);
  }

}
