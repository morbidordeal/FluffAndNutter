import { Component, OnInit, HostListener } from '@angular/core';
import { Monkey } from 'src/app/models';
import { Relation, Sex } from 'src/app/enums';
import { oneOf } from 'src/app/utilities';

@Component({
    selector: 'monkey-life',
    templateUrl: './monkeyLife.component.html',
    styleUrls: ['./monkeyLife.component.scss']
})
export class MonkeyLifeComponent implements OnInit {
    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      if (event.key === "Enter") {
        if (this.isPrompting) {
            //submit user input
            this.text += "<br>";
            this.promptAction(this.playerInput);
            this.isPrompting = false;
        }
      }
    }

    ngOnInit(): void {
        this.text = "";
        this.print("Welcome....welcome to the deep jungle");
        this.print("You are about to embark on your monkey life");
        this.print("What is your name?");
        setTimeout(() => {
            this.promptAction = ((text:string) => {
                this.player = {
                    name: text
                };
                this.print("Welcome, " + this.player.name);
                this.print("Now your life in the jungle begins...");
                this.print("You are a great ape, young and just entering adulthood");
                this.generateFamily();
                this.family.forEach(famMember => {
                    this.print(`You have a ${famMember.relation} named ${famMember.name}, ${famMember.age} years old`);
                });
            })
            this.prompt();
        }, 3000);
        
    }
    

    print(text: string, textClass: string = "") {
        // If we're already printing, check again in a second
        if (this.isPrinting) {
            setTimeout(() => {
                this.print(text, textClass);
            }, 1000);
            return;
        }

        this.isPrinting = true;
        this.text += "<br>";
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                this.text += text[i];
            }, 25 * i);
        }

        // After text is printed
        setTimeout(() => {
            this.isPrinting = false;
        }, 25 * text.length);
    }

    prompt(){
        this.isPrompting = true;
    }

    generateFamily(){
        this.family = [];
        
        this.family.push({
            name: this.generateName(Sex.Male),
            age: Math.floor(Math.random()*30 + 20),
            relation: Relation.Father,
            sex: Sex.Male
        });

        this.family.push({
            name: this.generateName(Sex.Female),
            age: Math.floor(Math.random()*30 + 15),
            relation: Relation.Mother,
            sex: Sex.Female
        });

        this.family.push({
            name: this.generateName(Sex.Male),
            age: Math.floor(Math.random()*30),
            relation: Relation.Brother,
            sex: Sex.Male
        });

        this.family.push({
            name: this.generateName(Sex.Male),
            age: Math.floor(Math.random()*30),
            relation: Relation.Brother,
            sex: Sex.Male
        });
    }

    generateName(sex: Sex): string {
        if (sex === Sex.Male) {
            return oneOf(["Grob","Bung","Chim","Dram","Bool","Luc"])
                +  oneOf(["lick","tar","blo","burt","man"]);
        }
        if (sex === Sex.Female) {
            return oneOf(["Fran","Bing","Gorl","Jess","Ball","Ass"])
                +  oneOf(["ia","ica","ietta","a","ette"]);
        }
    }

    family: Monkey[];
    text: string;
    playerInput: string;
    player: any;
    isPrinting: boolean = false;
    isPrompting: boolean = false;
    promptAction;
}