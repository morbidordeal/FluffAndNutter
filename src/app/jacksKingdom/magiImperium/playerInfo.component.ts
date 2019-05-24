import { Component, OnInit, Input } from '@angular/core';
import { Player } from './models';
import { calculateMaxHP, calculateMaxMP, calculateSpirit, calculateIntelligence } from './utils';

@Component({
    selector: 'player-info',
    templateUrl: './playerInfo.component.html',
    styleUrls: ['./playerInfo.component.scss']
})
export class PlayerInfoComponent implements OnInit {
    ngOnInit(): void {
    }

    @Input()
    player: Player;

    inventoryShowing: boolean = false;

    toggleInventory(){
        this.inventoryShowing = !this.inventoryShowing;
    }

    calculateMaxHP = () => calculateMaxHP(this.player);
    calculateMaxMP = () => calculateMaxMP(this.player);
    calculateIntelligence = () => calculateIntelligence(this.player);
    calculateSpirit = () => calculateSpirit(this.player);
}