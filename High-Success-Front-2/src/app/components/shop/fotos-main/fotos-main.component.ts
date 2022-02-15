import {Component, Input, OnInit} from '@angular/core';
import SwiperCore from 'swiper';
@Component({
  selector: 'fotos-main',
  templateUrl: './fotos-main.component.html',
  styleUrls: ['./fotos-main.component.scss']
})

export class FotosMainComponent implements OnInit {
  images: any;

  @Input() items : Array<any> | undefined;
    /*constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.keyboard = false;
        config.pauseOnHover = false;
        config.showNavigationIndicators = true
        this.items = []
    }*/
  ngOnInit(): void {
  }

}
