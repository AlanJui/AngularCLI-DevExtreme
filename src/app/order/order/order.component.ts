import { Component, OnInit } from '@angular/core';
import { createStore } from "devextreme-aspnet-data/js/dx.aspnet.data";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dataSource: any = {};
  events: Array<string>;

  constructor() { 
    this.dataSource.store = createStore({
      key: "orderID",
      loadUrl: "http://192.168.66.10:5000/api/orders",
      updateUrl: "http://192.168.66.10:5000/api/update-order",
      insertUrl: "http://192.168.66.10:5000/api/insert-order",
      deleteUrl: "http://192.168.66.10:5000/api/delete-order",

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
