import { Http } from '@angular/http';
import { Component, OnInit, Inject } from '@angular/core';

import CustomStore from 'devextreme/data/custom_store';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  dataSource: any = {};

  constructor(@Inject(Http) http: Http) {
    this.dataSource.store = new CustomStore({
        load: function (loadOptions) {
            var params = '?';

            params += 'skip=' + loadOptions.skip || 0;
            params += '&take=' + loadOptions.take || 12;

            if(loadOptions.sort) {
                params += '&orderby=' + loadOptions.sort[0].selector;
                if(loadOptions.sort[0].desc) {
                    params += ' desc';
                }
            }
            return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
                .toPromise()
                .then(response => {
                    var json = response.json();

                    return {
                        data: json.items,
                        totalCount: json.totalCount
                    }
                })
                .catch(error => { throw 'Data Loading Error' });
        }
    });
  }
  
  ngOnInit() {
  }

}
