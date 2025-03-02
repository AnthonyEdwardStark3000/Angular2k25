import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type Task } from './Task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  title = input();
  // task: Task = input();
  @Input({required:true})task!:Task;

  // for deleting the completed task from tasks component and display the remaining here in the Task component.
  @Output()complete = new EventEmitter<string>();
  makeTaskComplete(){
    this.complete.emit(this.task.id); 
  }
  ngOnInit() {
    console.log(this.task); // This will now show the task object correctly
  }
}
