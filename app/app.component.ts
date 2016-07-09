import {Component} from 'angular2/core';
import {TweetComponent} from "./tweet.component";
import {TweetService} from "./TweetService";

@Component({
  selector: 'my-app',
  directives: [TweetComponent],
  providers: [TweetService],
  template: `
            <div *ngFor="#tweet of tweets">
              <tweet [tweet]="tweet"></tweet>
            </div>
            `
})

export class AppComponent {
  tweets;

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }
  
}