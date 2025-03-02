import { Component, computed, signal } from '@angular/core';
import { dummy_users } from '../dummy-users';

const userIndex = Math.floor(Math.random() * dummy_users.length);
@Component({
  selector: 'app-olduser',
  imports: [],
  // templateUrl: './user.component.html',
  // styleUrl: './user.component.scss',
})
export class OldUserComponent {
  users = dummy_users;
  user = this.users[userIndex];
  selectedUserSignal = signal(this.users[userIndex]); //Initialize a signal

  //  get imagePath(){
  //   // return 'assets/users/'+this.user.avatar;
  //   return 'assets/users/'+this.selectedUserSignal.avatar;
  //  }
  imagePath = computed(
    () => 'assets/users/' + this.selectedUserSignal().avatar
  );
  onSelectUser() {
    console.log(this.imagePath);
    const userIndex = Math.floor(Math.random() * dummy_users.length);
    this.user = this.users[userIndex];
    this.selectedUserSignal.set(this.users[userIndex]); //update a signal
    console.log('clicked');
  }
}
