import { Component, OnInit, } from '@angular/core';

import { UserService } from "./user.service";

import { User } from "./user";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  show : boolean = false;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit(

  ) {
    this.getUsers();
  }

  // metodos 
  getUsers(): void {
    this._userService.getUsers()
      .subscribe(users => this.users = users);
  }
  
  create(user: User): boolean {
    // console.log(JSON.stringify(user)+"<----componente");
    this._userService.create(user)
      .subscribe(status => this.getUsers());
      return this.show = false;
  }
  
  

  destroy(user: User): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    this._userService.destroy(user)
      .subscribe(status => this.getUsers());
    /*
    // oops ... subscribe() is missing so nothing happens
    this.heroesService.deleteHero(hero.id);
    */
  }

  update(user : User) {
    // console.log(user);
    this._userService.update(user)
      .subscribe(status => this.getUsers())
        
  }

}
