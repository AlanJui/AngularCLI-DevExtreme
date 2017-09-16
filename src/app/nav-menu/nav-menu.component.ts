import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  title: string;

  constructor() {
    this.title = environment.hostName;
  }

  ngOnInit() {
  }


}
