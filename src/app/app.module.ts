import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskOutputComponent } from './components/task-input/task-output/task-output.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
