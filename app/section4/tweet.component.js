System.register(['angular2/core', "./like.component"], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            let TweetComponent = class TweetComponent {
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "tweet", void 0);
            TweetComponent = __decorate([
                core_1.Component({
                    selector: 'tweet',
                    directives: [like_component_1.LikeComponent],
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
                }), 
                __metadata('design:paramtypes', [])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map