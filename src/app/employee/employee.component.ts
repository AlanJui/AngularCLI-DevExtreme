import { Inject, Component, OnInit } from '@angular/core';

import { createStore } from "devextreme-aspnet-data/js/dx.aspnet.data";

import { APP_CONFIG, IAppConfig } from "../app.config";
import { EmployeeService } from './employee.service';
import { Employee } from "../models/employee";

@Component({
  providers: [EmployeeService],
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: any = {};
  events: Array<string> = [];
  private API: string;

  constructor(
    @Inject(APP_CONFIG) private config,
    private employeeService: EmployeeService) 
  { 
      this.API = `${config.apiEndpoint}`;
  }

  ngOnInit() {
    this.dataSource = createStore({
      key: "employeeId",
      loadUrl: `${this.API}/employees-list`,
      updateUrl: `${this.API}/employees-update`,
      insertUrl: `${this.API}/employees-create`,
      deleteUrl: `${this.API}/employees-delete`,

      onBeforeSend: function(operation, ajaxSettings) { 
        // operation - any of "load", "update", "insert", "delete"
        // ajaxSettings - http://api.jquery.com/jquery.ajax/
      }
    });
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

}
