import { Component,OnInit, Input } from '@angular/core';
import { RouterModule, PreloadAllModules, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login } from './login';


@Component({
    moduleId : module.id,
    selector : "LoginService",
    templateUrl : "./login.html" 
})
export class LoginComponent {
    
    constructor(private router : Router){};
    showModal : boolean = false;
    public uName : string ;
    // ngOnInit() {
    //     this.show ();
    // }
    
    // show() {
    //    showModal = true;
    // }

    submit ( uName :string , pwd : string) {
        if(uName != undefined && pwd != undefined ){
            document.cookie = "username = name ; expires=Thu, 18 Dec 2013 12:00:00 UTC";
            this.router.navigateByUrl('dashboard');
        }
    }
}