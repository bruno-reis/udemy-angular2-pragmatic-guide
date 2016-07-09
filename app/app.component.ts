import {Component} from 'angular2/core';
import {FavouriteComponent} from "./favourite.component";

@Component({
  selector: 'my-app',
  template: '<favourite [isFavourite]="post.isFavourite" (change)="onFavouriteChange($event)"></favourite>',
  directives: [FavouriteComponent]
})

export class AppComponent {
  post = {
    tittle: "Title",
    isFavourite: true
  };

  onFavouriteChange($event) {
    console.log($event)
  }
}