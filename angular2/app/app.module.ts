import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { TaskService} from './app.service';
import { AppComponent} from './app.component';
import { AddTaskComponent} from './addTask.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AddTaskComponent],
    bootstrap: [AppComponent],
    providers: [TaskService]
})

export class AppModule { }