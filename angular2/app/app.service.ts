import { Injectable } from '@angular/core';
import { Task } from './models/task';

export const tasks: Task[] = [
    { Name: 'Task 1', Deleted: false },
    { Name: 'Task 2', Deleted: true },
    { Name: 'Task 3', Deleted: false },
    { Name: 'Task 5', Deleted: false },
];

export var loggedIn: boolean = false;

@Injectable()
export class TaskService {

    getTasksList(): Task[] {
        return tasks;
    }

    // setLogin(): void {
    //     loggedIn = true;
    // }

    // resetLogin(): void {
    //     loggedIn = false;
    // }
}