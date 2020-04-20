import {Injectable} from '@angular/core';
import {GLOBALS} from "./gobals";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    public http: HttpClient
  ) {
  }

  public register(user: User): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(
      GLOBALS.url + 'register',
      params,
      {headers: headers});
  }
}
