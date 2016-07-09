import {Component} from 'angular2/core';
import {FavouriteComponent} from "./favourite.component";
import {LikeComponent} from "./like.component";

@Component({
  selector: 'my-app',
  template: '<like [liked]="post.liked" [likesCounter]="post.likesCounter"></like>',
  directives: [FavouriteComponent, LikeComponent]
})

export class AppComponent {
  post = {
    liked: false,
    likesCounter: 12
  };
}