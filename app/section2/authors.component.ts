import {Component} from 'angular2/core'
import {AuthorService} from "./author.service";

@Component({
  selector: 'authors',
  providers: [AuthorService],
  template: `
            <h2>Authors</h2>
            {{title}}
            <ul>
              <li *ngFor="#author of authors">
                {{author}}
              </li>
            </ul>
            `
})

export class AuthorComponent {
  title = "Title for authors page";
  authors;

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }
}