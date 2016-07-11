import {Component, Input} from 'angular2/core'

@Component({
  selector: 'accordion',
  directives: [],
  template: `
            <div class="accordion">
              <div class="title" (click)="toggle()">{{title}}
                <i class="glyphicon" 
                [ngClass]="{'glyphicon-chevron-up': isOpen,'glyphicon-chevron-down': !isOpen}">
                </i> 
              </div>
              <div *ngIf="isOpen">
                <ngContent></ngContent>
              </div>
            </div>
            `

})

export class AccordionComponent {
  @Input() title: string;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}