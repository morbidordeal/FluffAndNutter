import { Component, OnInit } from '@angular/core';
import { MagiType } from './enums';
import { Player } from './models';

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
            faceSrc: this.selectedCharacter.faceSrc
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
    dialogue: string[] = [
        "In a long-forgotten timeline, there was the enchanted world of Alathema.",
        "Alathema was a world of primitive technology, and advanced magical arts. Here, the magi roamed the landscape, in quest of domination of the natural order, and each other.",
        "Great lumbering beasts, demonic hosts, and skilled lords of old, all of these you will face with your magical might",
        "Enter the Imperium of the Magi, and claim your destiny!!"
    ];
    classes: any[] = [{
        name: MagiType.Wizard,
        description: "A student of the ways of magic and power, eternal seeker of greater glories.",
        src: "../../assets/images/class-wizard.jpg",
        faceSrc: "../../assets/images/face-wizard.jpg",
        perks: [
            "+10% Intelligence",
            "+10% MP"
        ]
    },
    {
        name: MagiType.MedicineMan,
        description: "A sacred healer, brother to all, master of pills and herbs.",
        src: "../../assets/images/class-medicine-man.jpg",
        faceSrc: "../../assets/images/face-medicine-man.jpg",
        perks: [
            "+20% HP"
        ]
    },
    {
        name: MagiType.Shaman,
        description: "An adventurer who dives into the spirit realm to encounter untold beings.",
        src: "../../assets/images/class-shaman.jpg",
        faceSrc: "../../assets/images/face-shaman.jpg",
        perks: [
            "+10% Spirit",
            "-10% Artifact Cost"
        ]
    },
    {
        name: MagiType.Sorcerer,
        description: "A born prodigy, naturally skilled in spells and conjurings.",
        src: "../../assets/images/class-sorcerer.jpg",
        faceSrc: "../../assets/images/face-sorcerer.jpg",
        perks: [
            "+10% Resistance (All Elements)"
        ]
    },
    {
        name: MagiType.Warlock,
        description: "A champion of the dark arts: brother of demons and consumer of chaos.",
        src: "../../assets/images/class-warlock.jpg",
        faceSrc: "../../assets/images/face-warlock.jpg",
        perks: [
            "+20% Dark Spell Damage"
        ]
    },
    {
        name: MagiType.Seer,
        description: "A prophetic vizier who peers deeply into reality and possible futures.",
        src: "../../assets/images/class-seer.jpg",
        faceSrc: "../../assets/images/face-seer.jpg",
        perks: [
            "+20% Intelligence"
        ]
    }];
}