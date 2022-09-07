import {
    animate,
    state,
    style,
    transition,
    trigger
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    animations: [
        trigger('flipState', [
            state('back', style({
                transform: 'rotateY(179deg)'
            })),
            state('front', style({
                transform: 'rotateY(0)'
            })),
            transition('back => front', animate('500ms ease-out')),
            transition('front => back', animate('500ms ease-in'))
        ])
    ]
})
export class Card implements OnInit {
    constructor() { }

    ngOnInit() { }

    flip: string = 'front';

    toggleFlip() {
        this.flip = (this.flip == 'front') ? 'back' : 'front';
    }
}
