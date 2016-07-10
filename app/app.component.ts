import {Component} from 'angular2/core';
import {SubscriptionFormComponent} from "./subscription-form.component";

@Component({
  selector: 'my-app',
  directives: [SubscriptionFormComponent],
  template: `
            <subscription-form></subscription-form>
            `
})

export class AppComponent {

}