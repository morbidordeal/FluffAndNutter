import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JacksKingdomComponent } from './jacksKingdom/jacksKingdom.component';
import { JoelsKingdomComponent } from './joelsKingdom/joelsKingdom.component';

@NgModule({
  declarations: [
    AppComponent,
    JacksKingdomComponent,
    JoelsKingdomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
