import { Component, OnInit } from '@angular/core';
import {UtilsService} from "../../../../services/Utils/utils.service";
import * as events from "events";

@Component({
  selector: 'details-main',
  templateUrl: './details-main.component.html',
  styleUrls: ['./details-main.component.scss']
})
export class DetailsMainComponent implements OnInit {

  TAB_SPACE = "&nbsp;&nbsp;&nbsp;&nbsp;"
  precios : number[];
  tallas: any[]
  tallaSelected: string;
  prevTarget: any;
  constructor(public utils: UtilsService) {
    this.precios = [123,123];
    this.tallas = [{name:"Small", showName:"S"}, {name:"Medium", showName:"M"}, {name:"Large", showName:"L"}]
    this.tallaSelected = ""
  }

  ngOnInit(): void {
  }

  selectSize(size: string, e: Event){
    let elem = (e.target) as HTMLElement
    //@ts-ignore
    elem.style = "background-color: #0EB2B2"
    if (this.prevTarget && this.prevTarget != e.target){
      this.prevTarget.style = "background-color: #ffffff"
    }
    this.prevTarget = e.target;
    this.tallaSelected = size;
    console.log(size)
  }


}
