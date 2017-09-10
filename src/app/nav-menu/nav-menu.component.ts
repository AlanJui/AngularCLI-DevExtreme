import { Component, OnInit } from '@angular/core';
// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarToggle() {
    // alert('OK!');
    // $('.navbar-toggle').slideToggle();
  }

}
