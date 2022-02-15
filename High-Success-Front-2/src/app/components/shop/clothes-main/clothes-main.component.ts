import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'clothes-main',
    templateUrl: './clothes-main.component.html',
    styleUrls: ['./clothes-main.component.scss']
})
export class ClothesMainComponent implements OnInit {

    images: any;
    @Input() items: Array<any>;

    constructor() {
        this.items = []

    }

    ngOnInit(): void {
    }

}
