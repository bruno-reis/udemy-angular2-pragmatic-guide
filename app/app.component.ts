import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArchiveComponent} from "./section10/archives.component";
import {HomeComponent} from "./section10/home.component";

@RouteConfig([
  {path: '', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/archives/:year/:month', name: 'Archives', component: ArchiveComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
    selector: 'my-app',
    template: `
              <router-outlet></router-outlet>
              `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
 
}