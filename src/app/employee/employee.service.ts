import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { APP_CONFIG, IAppConfig } from "../app.config";
import { State } from "../models/state";
import { Employee } from "../models/employee";

@Injectable()
export class EmployeeService {
  // private URL: string = 'http://192.168.66.11:5000/api/employees';
  private URL: string;

  constructor(
    @Inject(APP_CONFIG) private config,
    private http: Http) 
  {
      this.URL = `${config.apiEndpoint}/employees`;
  }

  getEmployees(): Promise<Employee[]> {
    // return employees;
    return this.http.get(this.URL)
              .toPromise()
              .then(response => response.json().data as Employee[])
              .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occured', error);   // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
