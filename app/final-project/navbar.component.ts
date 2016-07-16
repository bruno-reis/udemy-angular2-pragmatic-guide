import {Component} from 'angular2/core';
import {RouterLink, Router} from 'angular2/router';

@Component({
  selector: 'navbar',
  directives: [RouterLink],
  template: `
            <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">App</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li [class.active]="isCurrentRoute(['Users'])"><a [routerLink]="['Users']">Users</a></li>
        <li [class.active]="isCurrentRoute(['Posts'])"><a [routerLink]="['Posts']">Posts</a></li>
      </ul>   
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
            `
})

export class NavbarComponent {
  constructor(private router: Router) {

  }

  isCurrentRoute(route) {
    let instructions = this.router.generate(route);
    return this.router.isRouteActive(instructions);
  }
}
