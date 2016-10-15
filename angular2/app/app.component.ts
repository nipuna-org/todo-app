import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from './models/Task';
import { TaskService} from './app.service';
import globals = require('./globals');

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/styles.css'],
    providers: [TaskService]
})
export class AppComponent implements OnInit {
    title = 'Todo V1.0';
    tasks: Task[];
    loggedIn: boolean = globals.loggedIn;

    constructor(private taskService: TaskService) {

    }

    ngOnInit(): void {
        this.getTasks();
    }

    login(): void {
        this.loggedIn = true;
    }

    logout(): void {
        this.loggedIn = false;
    }

    getTasks(): void {
        this.tasks = this.taskService.getTasksList();
    }

}