import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from './user/user.component';
import { dummy_users } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  usersList = dummy_users;
  selected_user_id!:string;
  id!: string;

  get selectedUser() {
    return this.usersList.find((user) => user.id == this.id!);
  }
  onSelectUser(id: any) {
    this.id = id;
    this.selected_user_id = id;
    console.log('selected user with ID:' + id);
  }
}
