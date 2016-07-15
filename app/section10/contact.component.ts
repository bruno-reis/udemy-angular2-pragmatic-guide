import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
  templateUrl: '/app/section10/contact.component.html'
})

export class ContactComponent implements CanDeactivate{
  constructor(private _router:Router) {

  }

  routerCanDeactivate(next, previous) {
    console.log("n:" , next);
    console.log("p", previous);
    return confirm("Are you sure?");
  }

  onSubmit(form){
    console.log(form);
    this._router.navigate(['Albums']);
  }
}