import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private httpOptions: any;
  private BACKEND_URL: string = environment.urlApi;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }

  getProductsByCategory(id:string){
    return this.httpClient.get<any>(`${this.BACKEND_URL}/product/category/${id}`, this.httpOptions)
  }


}
