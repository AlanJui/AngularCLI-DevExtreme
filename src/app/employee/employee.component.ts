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
  events: Array<string>;

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    // this.dataSource = this.service.getEmployees();
    this.dataSource = createStore({
      key: "orderID",
      loadUrl: "http://192.168.66.10:5000/api/orders",
      updateUrl: "http://192.168.66.10:5000/api/update-order",
      insertUrl: "http://192.168.66.10:5000/api/insert-order",
      deleteUrl: "http://192.168.66.10:5000/api/delete-order",

      onBeforeSend: function(operation, ajaxSettings) {
          // operation - any of "load", "update", "insert", "delete"
          // ajaxSettings - http://api.jquery.com/jquery.ajax/
      }
    });
    this.states = this.service.getStates();
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

}
