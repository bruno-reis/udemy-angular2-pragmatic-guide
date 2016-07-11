System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let VoteComponent = class VoteComponent {
                constructor() {
                    this.vote = new core_1.EventEmitter();
                }
                onUpvote() {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ Value: this.myVote });
                }
                onDownvote() {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ Value: this.myVote });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "vote", void 0);
            VoteComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map