import { Component,OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Dashboard} from './dashboard';

@Component({
    moduleId : module.id,
    selector : "DashboardService",
    templateUrl : "./dashboard.html"  
})
export class DashboardComponent implements OnInit{  
    dashboardContents : Dashboard[] ;
    constructor ( private dashboardService :DashboardService ){};
    
    ngOnInit(){
        this.getContent();
    }
    getContent(){
        this.dashboardContents = this.dashboardService.getDashboardContentService();
    }

}