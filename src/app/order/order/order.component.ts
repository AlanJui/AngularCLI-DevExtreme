import { Component, OnInit } from '@angular/core';
import { createStore } from "devextreme-aspnet-data/js/dx.aspnet.data";

import { environment } from "../../../environments/environment";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  API: string = environment.API;
  dataSource: any = {};
  events: Array<string>;

  constructor() { 
    this.dataSource.store = createStore({
      key: "orderID",
      loadUrl: `${this.API}/orders`,
      updateUrl: `${this.API}/update-order`,
      insertUrl: `${this.API}/insert-order`,
      deleteUrl: `${this.API}/delete-order`,

      onBeforeSend: function(operation, ajaxSettings) { }
    });
  }

  ngOnInit() {
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }
}
