import {
  Component,
  Input,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input() id!: string;
  @Input() name?: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Angular',
      summary: 'Learn Angular mastery',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Dotnet',
      summary: 'Learn Dotnet mastery',
      dueDate: '2025-12-31',
    },
    {
      id: 't22',
      userId: 'u2',
      title: 'Dotnet2',
      summary: 'Learn Dotnet mastery microservices',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Dotnet',
      summary: 'Learn Dotnet microservices',
      dueDate: '2025-12-31',
    },
  ];
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.id);
  }

  onCompleteTask(id: any) {
    console.log(
      'completed task from the task component in tasks component ' + id
    );
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
