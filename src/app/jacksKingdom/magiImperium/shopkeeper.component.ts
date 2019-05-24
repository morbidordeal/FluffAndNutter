import { Component, OnInit, Input } from '@angular/core';
import { ShopKeeper, ShopItem, Player } from './models';

@Component({
    selector: 'shopkeeper',
    templateUrl: './shopkeeper.component.html',
    styleUrls: ['./shopkeeper.component.scss']
})
export class ShopkeeperComponent implements OnInit {
    ngOnInit(): void {
        this.dialogue = this.shopkeeper.greeting;
    }

    @Input()
    shopkeeper: ShopKeeper;

    @Input()
    player: Player;

    dialogue: string;
    selectedItem: ShopItem

    selectItem(item: ShopItem){
        this.selectedItem = item;
    }

    purchase() {
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
        this.dialogue = this.shopkeeper.goodbye;
    }
}