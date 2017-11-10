import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { Ng2FilterPipe } from 'ng2-filter-pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import {EmployeeComponent} from './employees/employee.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddMoreComponent} from './addMore/addMore.component';
import {LoginComponent} from './login/login.component';


import {EmployeeService} from './employees/employee.service';
import {DashboardService} from './dashboard/dashboard.service';
import {AddMoreService} from './addMore/addMore.service';
import {LoginService} from './login/login.service';

@NgModule({
  imports: [ BrowserModule,FormsModule,AppRoutingModule],
  declarations: [ AppComponent, HomeComponent,NavbarComponent,EmployeeComponent,
                  DashboardComponent,AddMoreComponent,LoginComponent],
  providers: [ EmployeeService,DashboardService,AddMoreService,LoginService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }