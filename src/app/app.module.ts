import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ObserverComponent } from './observer/observer.component';
import { Observer2Component } from './observer2/observer2.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserverComponent,
    Observer2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
