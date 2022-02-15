import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MXN',

  });

  constructor() { }
}
