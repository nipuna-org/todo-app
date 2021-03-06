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
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var globals = require('./globals');
var AppComponent = (function () {
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.title = 'Todo V1.0';
        this.loggedIn = globals.loggedIn;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    AppComponent.prototype.login = function () {
        this.loggedIn = true;
    };
    AppComponent.prototype.logout = function () {
        this.loggedIn = false;
    };
    AppComponent.prototype.getTasks = function () {
        this.tasks = this.taskService.getTasksList();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/styles.css'],
            providers: [app_service_1.TaskService]
        }), 
        __metadata('design:paramtypes', [app_service_1.TaskService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map