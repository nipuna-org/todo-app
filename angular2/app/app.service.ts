import { Injectable } from '@angular/core';
import { Task } from './models/task';

export const tasks: Task[] = [
    { Name: 'Task 1' },
    { Name: 'Task 2' },
    { Name: 'Task 3' },
    { Name: 'Task 5' }
];
@Injectable()
export class TaskService {

    getTasksList(): Task[] {
        return tasks;
    }
}