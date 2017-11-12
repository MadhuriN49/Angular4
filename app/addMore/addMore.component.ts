import { Component,OnInit } from '@angular/core';
import {AddMoreService} from './addMore.service';
import { NavService } from '../nav/nav.service';  
import {Dashboard} from '../dashboard/dashboard';

@Component({
    moduleId : module.id,
    selector : "AddMoreService",
    templateUrl : "./addMore.html"  
})

export class AddMoreComponent implements OnInit{
    constructor (private navService: NavService){};
    newObj : any = {} ;
    addMoreObjs : Dashboard [] = [] ;
    ngOnInit(){
        this.navService.show();
    }

    addMore( newObj : Dashboard){
        console.log(this.newObj);
        this.newObj.datePosted = new Date().getDate() + " / "  + new Date().getMonth() + " / " + new Date().getFullYear() ;
        this.addMoreObjs.push(this.newObj);
        sessionStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));
    }
}