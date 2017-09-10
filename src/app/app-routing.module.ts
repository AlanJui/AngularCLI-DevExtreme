import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { OrderComponent } from './order/order/order.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
