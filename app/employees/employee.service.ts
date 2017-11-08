import {Injectable} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';


import {Employee} from './employee';

@Injectable()
export class EmployeeService {
    getAllEmployess(){
        return[
            {id:1, name : "Anurag" , profile : "Developer"} ,
            {id:2, name : "Rashmi" , profile : "HR"},
            {id:3, name : "Soubhgya" , profile : "Developer"}]
    }
}
