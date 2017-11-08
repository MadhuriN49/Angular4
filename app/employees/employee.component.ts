import { Component,OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
    moduleId : module.id,
    selector : "EmployeeService",
    templateUrl : "./employee.html"   
 })
 
 export class EmployeeComponent implements OnInit{    
    employees :Employee[];
    showForm : boolean = false ;
    newEmployee : any = {} ;
   
    constructor ( private empService : EmployeeService ){

    };
    ngOnInit() {
        this.getAllEmployess();
    }

    getAllEmployess(){
        this.employees = this.empService.getAllEmployess();
    }

    addEmp(){
        this.showForm = true ;
    }

    addEdit(emp : Employee){
        this.employees.push(emp);
    }
    

 }