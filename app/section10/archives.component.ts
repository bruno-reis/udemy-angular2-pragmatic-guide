import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
            <h2>Archive</h2>
            <h3>{{year }}/{{ month}}</h3>
            `,
  directives: [ROUTER_DIRECTIVES]
})

export class ArchiveComponent implements OnInit {
  protected year;
  protected month;

  constructor(private _routeParams: RouteParams) {
  }

  ngOnInit(){
    this.month = this._routeParams.get('month');
    this.year = this._routeParams.get('year');
  }
  
}