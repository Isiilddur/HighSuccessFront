import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {
  @Input() urlImage: string;
  constructor() {
    this.urlImage = ""
  }

  ngOnInit(): void {
  }

}
