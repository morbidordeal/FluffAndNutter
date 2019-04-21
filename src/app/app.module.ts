import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JacksKingdomComponent } from './jacksKingdom/jacksKingdom.component';
import { JoelsKingdomComponent } from './joelsKingdom/joelsKingdom.component';
import { BattlegroundComponent } from './battleground/battleground.component';

const appRoutes: Routes = [
  { path: 'joels', component: JoelsKingdomComponent },
  { path: 'jacks', component: JacksKingdomComponent },
  { path: 'battleground', component: BattlegroundComponent },
  // { path: '', component: AppComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    JacksKingdomComponent,
    JoelsKingdomComponent,
    BattlegroundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
