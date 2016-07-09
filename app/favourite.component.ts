import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'favourite',
  template: `<br>
						<i class="glyphicon"
  				  [class.glyphicon-star-empty]="!isFavourite"
   			   	[class.glyphicon-star]="isFavourite"
  				  (click)="onClick()">
			      </i>
			      `,
  styles: [`
            .glyphicon {
              font-size: 50px;
              margin: 20px;
            }
            .glyphicon-star {
              color: purple;
          `]
})

export class FavouriteComponent {
  @Input() isFavourite = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({newValue: this.isFavourite});
  }
}