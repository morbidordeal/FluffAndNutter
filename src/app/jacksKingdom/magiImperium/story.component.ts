import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'story',
    templateUrl: './story.component.html',
    styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
    ngOnInit(): void {
        this.activeText = this.dialogue[0];
    }

    @Input()
    dialogue: string[];

    @Output()
    finished: EventEmitter<boolean> = new EventEmitter<boolean>();

    activeText: string;
    index: number = 0;
    buttonText: string = "Next";

    next(){
        this.index++;

        // On final line of dialogue, change button text to "Finish"
        if (this.index === this.dialogue.length - 1) {
            this.buttonText = "Finish";
        }

        // If all dialogue is complete, story is finished
        if (this.index === this.dialogue.length) {
            return this.finished.emit(true);
        }

        this.activeText = this.dialogue[this.index];
    }
}