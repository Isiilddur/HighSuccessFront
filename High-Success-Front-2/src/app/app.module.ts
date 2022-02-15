import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ShopModule } from "./components/shop/shop.module";
import { NavBarShopComponent } from "./components/shop/nav-bar-shop/nav-bar-shop.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ShopModule, NavBarShopComponent],
})
export class AppModule {
}
