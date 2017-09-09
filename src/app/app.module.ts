import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { OrderComponent } from './order/order/order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    NavMenuComponent,
    HomeComponent,
    HelpComponent,
    OrderComponent,
    EmployeeComponent
  ],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'help',
        component: HelpComponent
      },
      {
        path: 'orderList',
        component: OrderListComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
