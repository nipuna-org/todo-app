import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
        tasks: Task[];



    getTasksList(): Task[] {
        return [
            { Name: 'Task 1' },
            { Name: 'Task 2' },
            { Name: 'Task 3' }
        ];
    }
}

export class Task {
    public Name: string;

    constructor(name: string) {
        this.Name = name;
    }
}