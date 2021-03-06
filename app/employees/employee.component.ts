import { Component,OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import { NavService } from '../nav/nav.service';

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
    editedEmployee : any = {} ;
    copyEditObj : any = {};
    index : number;
    constructor ( private empService : EmployeeService,
                  private navService: NavService ){

    };
    ngOnInit() {
        this.getAllEmployess();
        this.navService.show();
    }

    getAllEmployess(){
        this.employees = this.empService.getAllEmployess();
    }

    addEdit(emp : Employee, index:number){
        if(!emp){
            this.isNewForm = true ;
            return
        }
        this.editForm = true ;
        this.isNewForm = false ;
        this.editedEmployee = emp ;
        this.copyEditObj = emp;
    }

    submit ( emp: Employee){
        if(this.isNewForm){
            this.employees.push(emp);
            this.newEmployee = {};
        }else{
            this.employees.splice(this.employees.indexOf(this.copyEditObj),1,emp);
            this.editForm = false ;
        }
    }

    cancel(){
        if(this.isNewForm){
            this.newEmployee = {};
        }else{
            this.editedEmployee = this.copyEditObj  ;
        }
    }

    delete(index : number){
        this.employees.splice(index , 1);
    }
 }