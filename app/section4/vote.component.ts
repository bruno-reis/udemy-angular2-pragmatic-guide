import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'vote',
  template: `<div style="width: 20px">
              <i class="glyphicon glyphicon-menu-up"
  				      [class.highlighted]="myVote == 1"
  				      (click)="onUpvote()">
  				    </i>
  				    <span class="counter">{{voteCount + myVote}}</span> 
   			   	  <i class="glyphicon glyphicon-menu-down"
   			   	    [class.highlighted]="myVote == -1"
  				      (click)="onDownvote()">
			        </i>
			      </div>
            `,
  styles: [`
            .glyphicon {
              font-size: 50px;
              margin: 0px 10px 0px 30px;
              cursor: pointer;
              color: #ccc;
            }
            .highlighted {
              color: gold;
            }
            .counter {
              margin-left: 23px;
              font-size: 60px;
            }
          `]
})

export class VoteComponent {
  @Input() voteCount;
  @Input() myVote;
  @Output() vote = new EventEmitter();
  
  onUpvote() {
    if (this.myVote == 1) { return }
    this.myVote++;
    this.vote.emit({Value: this.myVote})
  }
  
  onDownvote() {
    if (this.myVote == -1) { return }
    this.myVote--;
    this.vote.emit({Value: this.myVote})
  }
}