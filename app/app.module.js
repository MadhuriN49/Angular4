"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var nav_component_1 = require("./nav/nav.component");
var employee_component_1 = require("./employees/employee.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var addMore_component_1 = require("./addMore/addMore.component");
var login_component_1 = require("./login/login.component");
var employee_service_1 = require("./employees/employee.service");
var dashboard_service_1 = require("./dashboard/dashboard.service");
var addMore_service_1 = require("./addMore/addMore.service");
var login_service_1 = require("./login/login.service");
var nav_service_1 = require("./nav/nav.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, nav_component_1.NavbarComponent, employee_component_1.EmployeeComponent,
            dashboard_component_1.DashboardComponent, addMore_component_1.AddMoreComponent, login_component_1.LoginComponent],
        providers: [employee_service_1.EmployeeService, dashboard_service_1.DashboardService, addMore_service_1.AddMoreService, login_service_1.LoginService, nav_service_1.NavService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map