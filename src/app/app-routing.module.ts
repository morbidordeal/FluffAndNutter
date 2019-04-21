//this class is not being used because I couldn't get it to work.  Instead using app.module for routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JacksKingdomComponent } from './jacksKingdom/jacksKingdom.component';
import { JoelsKingdomComponent } from './joelsKingdom/joelsKingdom.component';
import { BattlegroundComponent } from './battleground/battleground.component';

const routes: Routes = [
  { path: 'joel', component: JoelsKingdomComponent },
  { path: 'jack', component: JacksKingdomComponent },
  { path: 'battleground', component: BattlegroundComponent },
  { path: '', component: AppComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
