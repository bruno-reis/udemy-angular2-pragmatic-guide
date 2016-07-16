import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from "./final-project/navbar.component";
import {HomeComponent} from "./final-project/home.component";
import {UsersComponent} from "./final-project/users.component";
import {PostsComponent} from "./final-project/posts.component";

@RouteConfig([
  {path: '', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/users', name: 'Users', component: UsersComponent},
  {path: '/posts', name: 'Posts', component: PostsComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    template: `
              <navbar></navbar>
              <div class="container">
                <router-outlet></router-outlet>
              </div>
              `,
    directives: [NavbarComponent, HomeComponent, UsersComponent, PostsComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
 
}