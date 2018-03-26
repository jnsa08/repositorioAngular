import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { RemotoComponent } from './remoto/remoto.component';
import { RazasService } from './razas.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    RemotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RazasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
