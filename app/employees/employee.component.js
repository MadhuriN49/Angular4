"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var nav_service_1 = require("../nav/nav.service");
var EmployeeComponent = (function () {
    function EmployeeComponent(empService, navService) {
        this.empService = empService;
        this.navService = navService;
        this.showForm = false;
        this.newEmployee = {};
        this.isNewForm = false;
        this.editForm = false;
        this.editedEmployee = {};
        this.copyEditObj = {};
    }
    ;
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getAllEmployess();
        this.navService.show();
    };
    EmployeeComponent.prototype.getAllEmployess = function () {
        this.employees = this.empService.getAllEmployess();
    };
    EmployeeComponent.prototype.addEdit = function (emp, index) {
        if (!emp) {
            this.isNewForm = true;
            return;
        }
        this.editForm = true;
        this.isNewForm = false;
        this.editedEmployee = emp;
        this.copyEditObj = emp;
    };
    EmployeeComponent.prototype.submit = function (emp) {
        if (this.isNewForm) {
            this.employees.push(emp);
            this.newEmployee = {};
        }
        else {
            this.employees.splice(this.employees.indexOf(this.copyEditObj), 1, emp);
            this.editForm = false;
        }
    };
    EmployeeComponent.prototype.cancel = function () {
        if (this.isNewForm) {
            this.newEmployee = {};
        }
        else {
            this.editedEmployee = this.copyEditObj;
        }
    };
    EmployeeComponent.prototype.delete = function (index) {
        this.employees.splice(index, 1);
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "EmployeeService",
        templateUrl: "./employee.html"
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        nav_service_1.NavService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map