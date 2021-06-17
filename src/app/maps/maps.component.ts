import { Component, OnInit } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const map = tt.map({
      key: 'NzjnkAlXkgOgAYxkABEom4VAtdfP3YFB',
      container: 'map'
    });
    map.addControl(new tt.NavigationControl());
  }

}
