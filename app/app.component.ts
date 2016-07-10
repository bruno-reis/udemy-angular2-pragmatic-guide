import {Component} from 'angular2/core';
import {AccordionComponent} from "./accordion.component";

@Component({
  selector: 'my-app',
  directives: [AccordionComponent],
  template: `
            <accordion title="Foo">Foo Content</accordion>
            <accordion title="Bar">Bar Content</accordion>
            `
})

export class AppComponent {

}