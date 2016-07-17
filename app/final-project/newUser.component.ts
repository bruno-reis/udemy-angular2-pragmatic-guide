import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
  template: `
          <div class="col-md-6 col-lg-6 well">
          <form [ngFormModel]="form">
             <fieldset >
                 <legend>User</legend>
                 <div class="form-group">
                     <label>Name</label>
                     <input ngControl="name" type="text" class="form-control">
                 </div>
                 <div class="form-group">
                     <label>Email</label>
                     <input ngControl="email" type="email" class="form-control">
                 </div>
                 <div class="form-group">
                     <label>Phone</label>
                     <input ngControl="phone" type="tel" class="form-control">
                 </div>
             </fieldset>
             <fieldset ngControlGroup="address">
                 <legend>Address</legend>
                 <div >
                     <div class="form-group">
                         <label>Street</label>
                         <input ngControl="street" type="text" class="form-control">
                     </div>
                     <div class="form-group">
                         <label>Number</label>
                         <input ngControl="number" type="text" class="form-control">
                     </div>
                     <div class="form-group">
                         <label>City</label>
                         <input ngControl="city" type="text" class="form-control">
                     </div>
                     <div class="form-group">
                         <label>ZipCode</label>
                         <input ngControl="zipcode" type="text" class="form-control">
                     </div>
                 </div>
             </fieldset>
            <button class="btn btn-primary" type="submit">Save</button>
          </form>
          </div>
          `
})

export class NewUserComponent {
    form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [],
      email: [],
      phone: [],
      address: fb.group({
        street: [],
        number: [],
        city: [],
        zipcode: []
      })
    });
  }
}
