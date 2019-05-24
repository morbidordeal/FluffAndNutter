import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JacksKingdomComponent } from './jacksKingdom/jacksKingdom.component';
import { JoelsKingdomComponent } from './joelsKingdom/joelsKingdom.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { MonkeyLifeComponent } from './jacksKingdom/monkeyLife/monkeyLife.component';
import { FormsModule }   from '@angular/forms';
import { MagiImperiumComponent } from './jacksKingdom/magiImperium/magiImperium.component';
import { PlayerInfoComponent } from './jacksKingdom/magiImperium/playerInfo.component';
import { StoryComponent } from './jacksKingdom/magiImperium/story.component';
import { ShopkeeperComponent } from './jacksKingdom/magiImperium/shopkeeper.component';
import { InventoryComponent } from './jacksKingdom/magiImperium/inventory.component';

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
    BattlegroundComponent,
    MonkeyLifeComponent,
    MagiImperiumComponent,
    PlayerInfoComponent,
    StoryComponent,
    ShopkeeperComponent,
    InventoryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
