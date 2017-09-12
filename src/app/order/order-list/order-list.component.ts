import { Http } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data/js/dx.aspnet.data';

import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';

import { environment } from "../../../environments/environment";
import { OrderService } from '../order.service';
import { CustomersLookup } from '../../models/customers-lookup';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  providers: [ OrderService ]
})
export class OrderListComponent implements OnInit {
  API: string = environment.API;
  masterDataSource: any = {};
  detailDataSource: any = {};
  events: Array < string > ;
  customersLookup: CustomersLookup[];
  shippersLookup: any[];
  orderDetails: any[];

  constructor(
    @Inject(Http) private http,
    private orderService: OrderService) 
  {
    this.masterDataSource.store = createStore({
      key: 'orderID',
      loadUrl: `${this.API}/orders`,
      updateUrl: `${this.API}/update-order`,
      insertUrl: `${this.API}/insert-order`,
      deleteUrl: `${this.API}/delete-order`,

      onBeforeSend: function(operation, ajaxSettings) {
        // operation - any of "load", "update", "insert", "delete"
        // ajaxSettings - http://api.jquery.com/jquery.ajax/
      }
    });
  
    // this.detailDataSource.store = createStore({
    //   loadUrl: `${this.API}/order-details`,
    //   loadParams: { orderID: 'orderID' }
    // });
  
 }

  ngOnInit() {
    this.orderService
      .getCustomersLookup()
      .then(data => this.customersLookup = data);
    
    this.orderService
      .getShippersLookup()
      .then(data => this.shippersLookup = data);
  }

  getDetails(orderID: number) {
    this.orderService
      .getOrderDetails(orderID)
      .then(data => {
        this.orderDetails = data;
      });
  }

}

