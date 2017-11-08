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
    isNewForm : boolean = false;
    editForm : boolean = false;
    editedEmployee : Employee ;
    index : number;
    constructor ( private empService : EmployeeService ){

    };
    ngOnInit() {
        this.getAllEmployess();
    }

    getAllEmployess(){
        this.employees = this.empService.getAllEmployess();
    }

    addEdit(emp : Employee, index:number){
        console.log("index is " + index);
        if(!emp){
            this.isNewForm = true ;
            return
        }
        this.editForm = true ;
        this.isNewForm = false ;
        this.editedEmployee = emp ;
        //this.employees.push(emp);
    }

    submit ( emp: Employee){
        if(this.isNewForm){
            this.employees.push(emp);
            this.newEmployee = {};
        }else{
            this.employees.splice(1, emp.id-1 , emp);
            this.editForm = false ;
        }
    }
 }