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
  dataSource: Employee[];
  states: State[];
  events: Array<string> = [];

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.dataSource = this.service.getEmployees();
    this.states = this.service.getStates();
  }

  logEvent(eventName) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }

}
