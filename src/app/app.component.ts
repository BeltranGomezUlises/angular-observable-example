import { Component } from '@angular/core';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputText = "example";

  constructor(private obService: ObservableService){
  }

  launch(){
    this.obService.nextValue(this.inputText);
  }

}
