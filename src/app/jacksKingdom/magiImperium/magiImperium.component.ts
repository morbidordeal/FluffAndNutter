import { Component, OnInit } from '@angular/core';
import { MagiType } from './enums';

@Component({
    selector: 'magi-imperium',
    templateUrl: './magiImperium.component.html',
    styleUrls: ['./magiImperium.component.scss']
})
export class MagiImperiumComponent implements OnInit {
    // @HostListener('window:keyup', ['$event'])
    // keyEvent(event: KeyboardEvent) {
    //   if (event.key === "Enter") {
    //     if (this.isPrompting) {
    //         //submit user input
    //         this.text += "<br>";
    //         let response = this.playerInput;
    //         this.playerInput = "";
    //         this.promptAction(response);
    //         this.isPrompting = false;
    //     }
    //   }
    // }
    

    ngOnInit(): void {
        this.headerText = "Magi Imperium";
        this.subHeaderText = "A War of Wills";
    }

    headerText: string;
    subHeaderText: string;
    classes: any[] = [{
        name: MagiType.Wizard
    },
    {
        name: MagiType.MedicineMan
    },
    {
        name: MagiType.Shaman
    },
    {
        name: MagiType.Sorcerer
    },
    {
        name: MagiType.Warlock
    },
    {
        name: MagiType.Witch
    },
    {
        name: MagiType.Seer
    }];
}