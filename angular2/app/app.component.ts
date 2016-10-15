import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from './app.service';
import { TaskService} from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/styles.css'],
    providers: [TaskService]
})
export class AppComponent implements OnInit {
    title = 'Todo V1.0';
    tasks: Task[];

    constructor(private taskService: TaskService) {

    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.tasks = this.taskService.getTasksList();
    }

}