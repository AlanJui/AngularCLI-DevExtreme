import { Component, OnInit } from '@angular/core';
import { createStore } from "devextreme-aspnet-data/js/dx.aspnet.data";

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
    dataSource: any = {};
    events: Array<string>;
    customers: any = {};
  
    constructor() { 
        this.customers.store = createStore({
            key: "value",
            loadUrl: "http://192.168.66.10/api/customers-lookup"
        });
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
// export class OrderListComponent implements OnInit {
//   dataSource: any = {};

//   constructor(@Inject(Http) http: Http) {
//     this.dataSource.store = new CustomStore({
//         load: function (loadOptions) {
//             var params = '?';

//             params += 'skip=' + loadOptions.skip || 0;
//             params += '&take=' + loadOptions.take || 12;

//             if(loadOptions.sort) {
//                 params += '&orderby=' + loadOptions.sort[0].selector;
//                 if(loadOptions.sort[0].desc) {
//                     params += ' desc';
//                 }
//             }
//             return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
//                 .toPromise()
//                 .then(response => {
//                     var json = response.json();

//                     return {
//                         data: json.items,
//                         totalCount: json.totalCount
//                     }
//                 })
//                 .catch(error => { throw 'Data Loading Error' });
//         }
//     });
//   }
  
//   ngOnInit() {
//   }

// }


