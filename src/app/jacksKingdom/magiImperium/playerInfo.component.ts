import { Component, OnInit, Input } from '@angular/core';
import { Player } from './models';
import { MagiType } from './enums';

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

    calculateIntelligence(){
        return this.player.intelligence * this.intelligenceMultiplier(this.player);
    }

    calculateSpirit(){
        return this.player.spirit * this.spiritMultiplier(this.player);
    }

    calculateHP(){
        return this.round(this.player.hp * this.hpMultiplier(this.player));
    }

    calculateMP(){
        return this.round(this.player.mp * this.mpMultiplier(this.player));
    }

    intelligenceMultiplier(player: Player): number{
        let baseMultiplier = 1.0;
        if (player.magiType === MagiType.Seer) {
            baseMultiplier += 0.2;
        }
        if (player.magiType === MagiType.Wizard) {
            baseMultiplier += 0.1;
        }
        return baseMultiplier;
    }

    hpMultiplier(player: Player): number{
        let baseMultiplier = 1.0;
        if (player.magiType === MagiType.MedicineMan) {
            baseMultiplier += 0.2;
        }
        return baseMultiplier;
    }

    mpMultiplier(player: Player): number{
        let baseMultiplier = 1.0;
        if (player.magiType === MagiType.Wizard) {
            baseMultiplier += 0.1;
        }
        return baseMultiplier;
    }

    spiritMultiplier(player: Player): number{
        let baseMultiplier = 1.0;
        if (player.magiType === MagiType.Shaman) {
            baseMultiplier += 0.1;
        }
        return baseMultiplier;
    }

    round(num: number): number{
        return Math.round(num * 100) / 100;
    }
}