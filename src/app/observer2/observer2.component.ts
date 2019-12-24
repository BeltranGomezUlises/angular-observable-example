import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer2',
  templateUrl: './observer2.component.html',
  styleUrls: ['./observer2.component.css']
})
export class Observer2Component implements OnInit {

  subscription: Subscription;
  texts: Array<string> = [];

  constructor(private obService: ObservableService) { }

  ngOnInit() {
    this.subcribeToService()
  }

  cancelSub() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  subcribeToService() {
    if (!this.subscription) {
      this.subscription = this.obService.subscribe((text: string) => {
        this.texts.push(text);
      });
    }
  }

}
