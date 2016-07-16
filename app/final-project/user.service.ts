import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private url = "http://jsonplaceholder.typicode.com";

  constructor(private http: Http) {

  }

  getUsers(): Observable<Array<User>> {
    return this.http.get(this.url + "/users")
      .map( res => res.json());
  }
  
}