import {Control, ControlGroup} from 'angular2/common'

export class PasswordValidators {
  static shouldBeEquals(group: ControlGroup) {
    let newPassword = group.find('newPassword').value;
    let confirmPassword = group.find('currentPassword').value;

    if (newPassword == '' || confirmPassword == '')
            return null;

    if (newPassword != confirmPassword) {
      return { shouldBeEquals: true}
    }

    return null
  }

}