import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

import { APP_CONFIG, AppConfig } from "./app.config";
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
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    },
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
