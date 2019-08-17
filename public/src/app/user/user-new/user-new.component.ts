import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  newUser = new User;
  // show : boolean = false;
  @Output() createNewUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  create(){
    this.createNewUserEvent.emit(this.newUser)
    this.newUser = new User();
    // return this.show; 
  }

}
