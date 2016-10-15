import { Component, Input } from '@angular/core';
import { Task } from './models/Task';
import { TaskService} from './app.service';

@Component({
    selector: 'add-task',
    templateUrl: 'app/views/addTask.component.html',
    styleUrls: ['app/styles.css'],
    providers: [TaskService]
})

export class AddTaskComponent {
    tasks: Task[];
    submitted = false;

    onsubmit(){ this.submitted = true;}

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
        this.getTasks();
    }

    getTasks(): void {
        this.tasks = this.taskService.getTasksList();
    }

    addTask(): void {
        let newTask = new Task('taskNew');
        this.tasks.push(newTask);
    }
}