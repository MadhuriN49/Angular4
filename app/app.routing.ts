import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {EmployeeComponent} from './employees/employee.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddMoreComponent} from './addMore/addMore.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: LoginComponent },
            { path: 'dashboard', component: DashboardComponent },
            {path : 'addMore' , component: AddMoreComponent }, 
            {path : "allEmps", component: EmployeeComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' }          
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }