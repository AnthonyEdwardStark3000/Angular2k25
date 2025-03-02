import { Component, computed, EventEmitter, input, Input, OnChanges, Output, signal, SimpleChanges} from '@angular/core';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent{
    // @Input()avatar!:string;
    // @Input()name!:string;
    // avatar = input();
    // name = input();
    // id = input();

   @Input({required:true})user!:User;
   @Input()IsSelected!:boolean;
    // idSignal = signal(this.id);

    @Output() selected = new EventEmitter(); //emits a new custom event named as selected()
    // avatarSignal = signal(this.user.avatar);
    imagePath = computed(()=>'assets/users/'+this.user.avatar);

    // ngOnChanges(changes: SimpleChanges) {
    //     if (changes['avatar']) {
    //       this.avatarSignal.set(this.user.avatar);
    //     }
    //   }
    onSelectUser() {
      console.log("Selected:"+this.IsSelected);
      this.selected.emit(this.user.id);
    }
}
