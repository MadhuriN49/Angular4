import { Component,OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import { NavService } from '../nav/nav.service';
import {Dashboard} from './dashboard';

@Component({
    moduleId : module.id,
    selector : "DashboardService",
    templateUrl : "./dashboard.html"  
})
export class DashboardComponent implements OnInit{  
    dashboardContents : Dashboard[] ;
    constructor ( private dashboardService :DashboardService ,
                  private navService: NavService){};
                     
    ngOnInit(){
        this.navService.show();
        this.getContent();         
    }
    getContent(){
      
        this.dashboardContents = this.dashboardService.getDashboardContentService();
        // var data = JSON.parse(sessionStorage.getItem("addedData"));
        // for (let d of data) {
        //     this.dashboardContents.push(d);
        // }
        var newItems = JSON.parse(sessionStorage.getItem("addMore"));
        for (let newItem of newItems) {
            this.dashboardContents.push(newItem);
        }
        var addedData = this.dashboardContents;
      //  sessionStorage.setItem("addedData", JSON.stringify(addedData));
       // this.dashboardContents.push(JSON.parse(sessionStorage.getItem("addMore")));
    }

    delete(index : number){
        this.dashboardContents.splice(index , 1 ); 
    }

    addToDashboard(){

    }

}