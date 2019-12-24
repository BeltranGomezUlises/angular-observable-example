import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  subscription: Subscription;
  texts: Array<string> = [];

  constructor(private obService: ObservableService) { }

  ngOnInit() {
    this.subcribeToService()
  }

  cancelSub(){
    if(this.subscription){
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  subcribeToService(){
    if(!this.subscription){
      this.subscription = this.obService.subscribe( (text:string) => {
        this.texts.push(text);
      });
    }
  }

}
