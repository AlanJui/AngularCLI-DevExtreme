import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { State } from "../models/state";
import { Employee } from "../models/employee";
import { createStore } from "devextreme-aspnet-data/js/dx.aspnet.data";

@Component({
  providers: [EmployeeService],
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource: any = {};
  // dataSource: Employee[];
  states: State[];
  events: Array<string> = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.dataSource = createStore({
      key: "employeeId",
      loadUrl: "http://192.168.66.11:5000/api/employees-list",
      updateUrl: "http://192.168.66.11:5000/api/employees-update",
      insertUrl: "http://192.168.66.11:5000/api/employees-create",
      deleteUrl: "http://192.168.66.11:5000/api/employees-delete",

      onBeforeSend: function(operation, ajaxSettings) { 
        // operation - any of "load", "update", "insert", "delete"
        // ajaxSettings - http://api.jquery.com/jquery.ajax/
      }
    });

    this.states = this.employeeService.getStates();
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

}
