import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from "../../environments/environment";
import { CustomersLookup } from "../models/customers-lookup";

@Injectable()
export class OrderService {
  URL: string = environment.API;

  constructor(private http: Http) {
  }

  getCustomersLookup(): Promise<CustomersLookup[]> {
    return this.http.get(`${this.URL}/customers-lookup`)
              .toPromise()
              // .then(response => response.json() as CustomersLookup[])
              .then(response => response.json())
              .catch(this.handleError);
  }

  getShippersLookup(): Promise<any[]> {
    return this.http.get(`${this.URL}/shippers-lookup`)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  getOrders(): Promise<any[]> {
    return this.http.get(`${this.URL}/orders`)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  getOrderDetails(orderID: number): Promise<any[]> {
    return this.http.get(`${this.URL}/order-details/${orderID}`)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured', error);   // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
