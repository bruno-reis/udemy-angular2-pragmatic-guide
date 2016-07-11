import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {LikeComponent} from "./like.component";

@Component({
  selector: 'tweet',
  directives: [LikeComponent],
  template: `
           <div class="media tweet">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="http://lorempixel.com/100/100/people/1" alt="people avatar">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">{{tweet.title}} <span class="author"> {{tweet.author}}</span></h4> 
              <p>{{tweet.text}}</p>
              <like [liked]="tweet.liked" [likesCounter]="tweet.likesCounter" ></like>
            </div>
          </div>
          `,
  styles: [`
           .tweet {
              margin: 10px 5px 5px 25px;  
           }
           .author {
              color: gray;
           }
          `]
})

export class TweetComponent {
  @Input() tweet;
  
}