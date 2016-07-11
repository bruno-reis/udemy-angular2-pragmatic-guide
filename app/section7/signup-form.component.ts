import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
  selector: 'signup-form',
  templateUrl: 'app/section7/signup-form.component.html'
})

export class SignUpFormComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', 
        Validators.compose([Validators.required, UsernameValidators.cannotContainSpace] ), 
        UsernameValidators.shouldBeUnique],
      password: ['', Validators.required]
    });
  }

  signUp() {
    this.form.find('username').setErrors({
      invalidLogin: true
    });

    console.log(this.form.value);
  }
}