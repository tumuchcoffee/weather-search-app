import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import * as tt from '@tomtom-international/web-sdk-maps';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getLocations(term: string)
  {
    var map = tt.map({
      key: 'NzjnkAlXkgOgAYxkABEom4VAtdfP3YFB',
      container: 'map',
      center: [-0.12582778930664062, 51.49912573429843],
      zoom: 6,
      dragPan: false
    });
    tt.setProductInfo('search-app','1.0.0');
  }
}
