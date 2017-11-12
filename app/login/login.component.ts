import { Component,OnInit, Input } from '@angular/core';
import { RouterModule, PreloadAllModules, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NavService } from '../nav/nav.service';
import { Login } from './login';

@Component({
    moduleId : module.id,
    selector : "LoginService",
    templateUrl : "./login.html" 
})
export class LoginComponent  {
    
    constructor(private router :Router , 
                private loginService: LoginService,
                private navService: NavService){

    };

    submit ( userName: string , password : string) {
        if(  userName != undefined &&  password != undefined ){
            sessionStorage.setItem('loggedInUser', userName);            
            var data = sessionStorage.getItem('loggedInUser');
            console.log(data);
        //    document.cookie = " loginUserName " = loginUserName; 
           this.navService.show();
           this.router.navigateByUrl('dashboard');
        }
    }
}