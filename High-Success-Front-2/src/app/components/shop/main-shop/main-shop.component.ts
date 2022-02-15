import {Component, OnInit} from '@angular/core';
import {NavBarShopComponent} from "../nav-bar-shop/nav-bar-shop.component";
import {RestService} from "../../../services/Rest/rest.service";
import {takeUntil} from "rxjs";

@Component({
    selector: 'app-main-shop',
    templateUrl: './main-shop.component.html',
    styleUrls: ['./main-shop.component.scss']
})
export class MainShopComponent implements OnInit {

    public items : Array<any> = [];
    public images: Array<any> = [
    ]
    constructor(
        private navBar: NavBarShopComponent,
        private restService: RestService
    ) {
        this.images = ["https://high-success.s3.us-east-2.amazonaws.com/assets/foto1.png",
            "https://high-success.s3.us-east-2.amazonaws.com/assets/foto2.png",
            "https://high-success.s3.us-east-2.amazonaws.com/assets/foto3.png"]
    }

    ngOnInit(): void {
        this.restService.getProductsByCategory("1639437306385").pipe().subscribe(async result=> {
            let response = result as any
            // @ts-ignore
            if(response.status === 200){
                this.items = response.data;
                console.log(this.items)
            }
        })
    }



}
