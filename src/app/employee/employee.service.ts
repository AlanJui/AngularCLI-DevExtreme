import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { environment } from "../../environments/environment";
import { State } from '../models/state';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  // private URL: string = 'http://192.168.66.11:5000/api/employees';
  URL: string = environment.API;

  constructor(private http: Http) {
  }

  getEmployees(): Promise<Employee[]> {
    // return employees;
    return this.http.get(`${this.URL}/employees`)
              .toPromise()
              .then(response => response.json().data as Employee[])
              .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured', error);   // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
