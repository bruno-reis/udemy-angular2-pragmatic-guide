import {Component} from 'angular2/core'

@Component({
  selector: 'favourite',
  template: `
						<i class="glyphicon"
  				  [class.glyphicon-star-empty]="!isFavourite"
   			   	[class.glyphicon-star]="isFavourite"
  				  (click)="onClick()">
			      </i>
`
})

export class FavouriteComponent {
  isFavourite = false;

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}