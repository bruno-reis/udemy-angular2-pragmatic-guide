import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';

@Component({
  selector: 'change-password-form',
  templateUrl: 'app/section7/change-password-form.component.html'
})

export class ChangePasswordFormComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      currentPassword: ['',
        Validators.compose([Validators.required, ] )
        ],
      newPassword: ['',
        Validators.compose([Validators.required, ] )
        ],
      confirmPassword: ['',
        Validators.compose([Validators.required] )
        ]
    }, PasswordValidators.shouldBeEquals);
  }

  changePassword() {
    if (this.form.value.currentPassword != 'qweqwe') {
      this.form.find('currentPassword').setErrors({
        invalidPassword: true
      });
    }

    console.log(this.form.value);
  }
}