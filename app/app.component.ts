import {Component} from 'angular2/core';
import {ChangePasswordFormComponent} from "./section7/change-password-form.component";

@Component({
  selector: 'my-app',
  directives: [ChangePasswordFormComponent],
  template: `
        <change-password-form></change-password-form>
    `
})

export class AppComponent {
}