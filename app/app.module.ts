import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import {EmployeeComponent} from './employees/employee.component';

import {EmployeeService} from './employees/employee.service';

@NgModule({
  imports: [ BrowserModule,FormsModule,AppRoutingModule],
  declarations: [ AppComponent, HomeComponent,NavbarComponent,EmployeeComponent],
  providers: [ EmployeeService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }