import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent} from './app.component';
import { AddTaskComponent} from './addTask.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, AddTaskComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }