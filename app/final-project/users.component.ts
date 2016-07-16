import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {User} from './user';
import {UserService} from "./user.service";

@Component({
  template: `
               <h1>Users Page</h1>
               <table class="table table-bordered">
               <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
               </thead>
               <tbody>
                <tr *ngFor="#user of users">
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td><i class="glyphicon glyphicon-edit"></i></td>
                  <td><i class="glyphicon glyphicon-remove"></i></td>
                </tr>
               </tbody>
               </table>
             `,
  directives: [RouterLink],
  providers: [HTTP_PROVIDERS, UserService]
})

export class UsersComponent implements OnInit {
  protected users: Array<User>;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( users => this.users = users)
  }

}