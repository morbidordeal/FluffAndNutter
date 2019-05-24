import { Component, OnInit } from '@angular/core';
import { MagiType } from './enums';
import { Player, ShopKeeper } from './models';
import { forestMan, classes } from './gameData';

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

    select(classToSelect: any) {
        if (!this.isSelected) {
            this.selectedCharacter = classToSelect;
        }
    }

    selectCharacter(){
        this.isSelected = true;
        this.player = {
            name: "",
            magiType: this.selectedCharacter.name,
            hp: 100,
            mp: 100,
            intelligence: 20,
            spirit: 20,
            src: this.selectedCharacter.src,
            faceSrc: this.selectedCharacter.faceSrc,
            gold: 200
        }
        setTimeout(()=>{
            this.stage = 'char-info';
        }, 1200);
    }

    onImageLoad(name: MagiType){
        this.selectedName = name;
    }

    enterName(){
        this.player.name = this.playerName;
    }

    finishIntro(){
        this.introFinished = true;
    }

    introFinished: boolean = false;
    player: Player;
    selectedName: MagiType;
    headerText: string;
    subHeaderText: string;
    selectedCharacter: any;
    isSelected: boolean = false;
    stage: string = 'char-select';
    playerName: string = "";
    forestMan: ShopKeeper = forestMan;
    dialogue: string[] = [
        "In a long-forgotten timeline, there was the enchanted world of Alathema.",
        "Alathema was a world of primitive technology, and advanced magical arts. Here, the magi roamed the landscape, in quest of domination of the natural order, and each other.",
        "Great lumbering beasts, demonic hosts, and skilled lords of old, all of these you will face with your magical might",
        "Enter the Imperium of the Magi, and claim your destiny!!"
    ];
    classes: any[] = classes;
}