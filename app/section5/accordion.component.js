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
    var AccordionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let AccordionComponent = class AccordionComponent {
                constructor() {
                    this.isOpen = false;
                }
                toggle() {
                    this.isOpen = !this.isOpen;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], AccordionComponent.prototype, "title", void 0);
            AccordionComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], AccordionComponent);
            exports_1("AccordionComponent", AccordionComponent);
        }
    }
});
//# sourceMappingURL=accordion.component.js.map