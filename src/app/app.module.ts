import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

import { AppRoutingModule } from "./app-routing.module";
import { EmployeeService } from "./employee/employee.service";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { OrderComponent } from './order/order/order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HelpComponent,
    HomeComponent,
    OrderListComponent,
    OrderComponent,
    EmployeeComponent
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
