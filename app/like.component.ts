import {Component, Input} from 'angular2/core'

@Component({
  selector: 'like',
  template: `
             <i class="glyphicon"
  				  [class.glyphicon-heart-empty]="!liked"
   			   	[class.glyphicon-heart]="liked"
  				  (click)="onClick()">
			      </i>
			      <span class="counter">{{likesCounter}}</span>
            `,
  styles: [`
            .glyphicon {
              font-size: 50px;
              margin: 30px 10px 30px 30px;
              cursor: pointer;
            }
            .glyphicon-heart {
              color: lightblue;
            }
            .glyphicon-heart-empty {
              color: #ccc;
            }
            .counter {
              font-size: 60px;
            }
          `]
})

export class LikeComponent {
  @Input() liked = true;
  @Input() likesCounter = 10;

  onClick() {
    this.liked = !this.liked;
    this.likesCounter += this.liked ? 1 : -1;
  }
}