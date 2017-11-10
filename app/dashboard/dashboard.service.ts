import {Injectable} from '@angular/core';
import { Dashboard } from './dashboard';

@Injectable()
export class DashboardService{

    getDashboardContentService() {
        return[{
                title : "Component1",
                content : "Dummy Content",
                authorName : "Carl" ,
                 datePosted : new Date(), 
                imgPath: "app/shared/images/carl.jpeg"
               },
               {
                title : "Component2",
                content : "Dummy Content",
                authorName : "Andria" ,
                 datePosted : new Date(), 
                imgPath: "app/shared/images/andria.jpeg"
               },
               {
                title : "Component3",
                content : "Dummy Content",
                authorName : "Max" ,
                 datePosted : new Date(), 
                imgPath: "app/shared/images/max.jpeg"
               },
            ];
    }
}