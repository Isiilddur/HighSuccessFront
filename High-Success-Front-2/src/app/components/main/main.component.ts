import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  height: any;
  constructor() { }
  ngOnInit(): void {
    this.height = window?.innerHeight
    console.log(this.height)
  }

  showLog(){
    console.log("safasf")
  }



}
