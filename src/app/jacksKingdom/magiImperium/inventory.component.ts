import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player, Item } from './models';
import { ItemType } from './enums';
import { consume, equip } from './utils';

@Component({
    selector: 'inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
    ngOnInit(): void {
    }

    @Input()
    player: Player;

    selectedItem: Item;
    ItemType = ItemType;

    select(item: Item) {
        console.log("select!")
        this.selectedItem = item;
    }

    consume(){
        consume(this.player, this.selectedItem);
        this.removeSelectedItemFromInventory();
    }

    removeSelectedItemFromInventory(){
        var consumedItemIndex = this.player.inventory.findIndex((i: Item) => i.name === this.selectedItem.name);
        this.player.inventory.splice(consumedItemIndex, 1);
        this.selectedItem = null;
    }

    equip(){
        equip(this.player, this.selectedItem);
        this.removeSelectedItemFromInventory();
    }
}