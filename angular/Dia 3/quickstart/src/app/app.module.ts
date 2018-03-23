import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppComponent2 }  from './app2.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AppComponent2],
  bootstrap:    [ AppComponent,AppComponent2]
})
export class AppModule { }
