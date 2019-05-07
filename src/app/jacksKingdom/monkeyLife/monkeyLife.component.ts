import { Component, OnInit, HostListener } from '@angular/core';
import { Monkey } from 'src/app/models';
import { generateFamily, getResponseToSocialStatus } from './utilities';
import { SocialStatus, Relation } from 'src/app/enums';

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
            let response = this.playerInput;
            this.playerInput = "";
            this.promptAction(response);
            this.isPrompting = false;
        }
      }
    }

    ngOnInit(): void {
        this.text = "";

        this.print("Welcome....welcome to the deep jungle");
        this.print("You are about to embark on your monkey life");
        this.print("What is your name?");

        this.askPlayer((text:string) => {
            this.player = {
                name: text
            };
            this.print("Welcome, " + this.player.name);
            this.print("Now your life in the jungle begins...");
            this.print("You are a great ape, young and just entering adulthood");
            this.family = generateFamily();
            this.family.forEach(famMember => {
                this.print(`You have a ${famMember.relation} named ${famMember.name}, ${famMember.age} years old`);
            });
            this.print("What kind of social status do you think you were born into? (High, Low, Average, Hated)");
            this.askPlayer((answer:string) => {
                this.print(getResponseToSocialStatus(answer, this.father().socialStatus));
            })
        });
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
            }, this.characterPrintTime * i);
        }

        // After text is printed
        setTimeout(() => {
            this.isPrinting = false;
        }, this.characterPrintTime * text.length);
    }

    askPlayer(action: any){
        setTimeout(() => {
            this.promptAction = action;
            this.isPrompting = true;
        }, 3000);
    }

    father(): Monkey{
        let father = this.family.filter(f => f.relation === Relation.Father)[0];
        return father;
    }

    family: Monkey[];
    text: string;
    playerInput: string;
    player: any;
    isPrinting: boolean = false;
    isPrompting: boolean = false;
    promptAction;

    characterPrintTime = 25;

}