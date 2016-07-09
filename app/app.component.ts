import {Component} from 'angular2/core';
import {SummaryPipe} from "./summary.pipe";

@Component({
  selector: 'my-app',
  pipes: [SummaryPipe],
  template: `
            {{post.title}}
            <br />
            {{post.body | summary:20}}
            `
})

export class AppComponent {
  post = {
    title: 'Angular tutorial',
    body: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque et tortor quis quam tempor fringilla. Sed sodales nulla vehicula feugiat posuere. 
          Nullam tempor imperdiet rutrum. Sed ac varius dui, scelerisque interdum quam.
          In ut metus sed elit faucibus fermentum. In hac habitasse platea dictumst.
          Nunc at facilisis mauris, non pharetra augue.
          `
  }
  
}