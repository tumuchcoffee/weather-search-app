import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainMenu: MenuItem[];
  profileMenu: MenuItem[];

  constructor() {
    this.mainMenu = [
      { label: 'Search App' },
      { label: 'Dashboard', routerLink: '/dashboard' },
      { label: 'Travel', items: [
        { label: 'Maps', routerLink: '/maps'},
        { label: 'Weather', routerLink: '/weather' }
      ]}
    ]; 
    this.profileMenu = [
      { label: 'Sign In', routerLink: '/login' }
    ];
  }

  ngOnInit(): void {
  }

}
