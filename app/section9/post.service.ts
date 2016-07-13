import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Post} from './post';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) {

  }

  getPosts(): Observable<Array<Post>> {
    return this._http.get(this._url)
      .map(res => res.json());
  }

  createPost(post: Post) {
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }
}