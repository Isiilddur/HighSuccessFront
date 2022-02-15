import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainShopComponent } from './main-shop/main-shop.component';
import { NavBarShopComponent } from './nav-bar-shop/nav-bar-shop.component';
import {IgxIconModule, IgxInputGroupModule, IgxNavbarModule} from "igniteui-angular";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import { FotosMainComponent } from './fotos-main/fotos-main.component';
import { ClothesMainComponent } from './clothes-main/clothes-main.component';
import {FooterComponent} from "./footer/footer.component";
import { DetailsMainComponent } from './details/details-main/details-main.component';
import { ImageDetailsComponent } from './details/image-details/image-details.component';
import { HighlightDirective } from './details/details-main/highlight.directive';
import {RouterModule} from "@angular/router";
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    MainShopComponent,
    NavBarShopComponent,
    FotosMainComponent,
    ClothesMainComponent,
    FooterComponent,
    DetailsMainComponent,
    ImageDetailsComponent,
    HighlightDirective,

  ],
    imports: [
        CommonModule,
        IgxNavbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        RouterModule,
        SwiperModule
    ],
})
export class ShopModule { }
