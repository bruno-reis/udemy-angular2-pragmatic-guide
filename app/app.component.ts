import {Component, OnInit} from 'angular2/core';
import {PostService} from './section9/post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'my-app',
  providers: [PostService, HTTP_PROVIDERS],
  template: `
             <div *ngIf="isLoading">
              <i class="fa fa-spinner fa-spin fa-3x"></i>
             </div>
            `
})

export class AppComponent implements OnInit{
  isLoading = true;

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe( posts => {
        this.isLoading = false;
        console.log(posts)
      });
  }
}
