import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Http, HttpModule } from '@angular/http';

import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from "devextreme-angular";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    NavMenuComponent,
    HomeComponent,
    HelpComponent
  ],
  imports: [
    DxDataGridModule,
    DxButtonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'help', component: HelpComponent },
      { path: 'orderList', component: OrderListComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
