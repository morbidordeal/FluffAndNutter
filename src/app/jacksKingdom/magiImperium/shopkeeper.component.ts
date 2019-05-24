import { Component, OnInit, Input } from '@angular/core';
import { ShopKeeper, ShopItem, Player } from './models';

@Component({
    selector: 'shopkeeper',
    templateUrl: './shopkeeper.component.html',
    styleUrls: ['./shopkeeper.component.scss']
})
export class ShopkeeperComponent implements OnInit {
    ngOnInit(): void {
        this.textColor = this.shopkeeper.textColor;
        this.dialogue = this.shopkeeper.greeting;
    }

    @Input()
    shopkeeper: ShopKeeper;

    @Input()
    player: Player;

    dialogue: string;
    selectedItem: ShopItem
    textColor: string = "white";

    selectItem(item: ShopItem){
        this.selectedItem = item;
    }

    purchase() {
        this.textColor = "white";

        if (!this.selectedItem) {
            this.dialogue = "You haven't selected an item to purchase!"
        }
        else if (this.player.gold >= this.selectedItem.cost) {
            this.dialogue = `You purchased ${this.selectedItem.name} for ${this.selectedItem.cost} gold!`;
            this.player.gold -= this.selectedItem.cost;
        }
        else {
            this.dialogue = `You do not have enough gold to purchase the ${this.selectedItem.name}!`
        }

        this.selectedItem = null;
    }

    leave(){
        this.textColor = this.shopkeeper.textColor;
        this.dialogue = this.shopkeeper.goodbye;
    }
}