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
              font-size: 15px;
              margin: 0px 0px 0px 0px;
              cursor: pointer;
            }
            .glyphicon-heart {
              color: lightblue;
            }
            .glyphicon-heart-empty {
              color: #ccc;
            }
            .counter {
              font-size: 15px;
            }
          `]
})

export class LikeComponent {
  @Input() liked = true;
  @Input() likesCounter = 11;

  onClick() {
    this.liked = !this.liked;
    this.likesCounter += this.liked ? 1 : -1;
  }
}