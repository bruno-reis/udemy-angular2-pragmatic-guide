import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from "./section10/home.component";
import {NavbarComponent} from "./final-project/navbar.component";

@RouteConfig([
  {path: '', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    template: `
              <navbar></navbar>
              `,
    directives: [NavbarComponent]
})
export class AppComponent {
 
}