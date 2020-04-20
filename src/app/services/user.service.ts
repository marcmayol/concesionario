import { Injectable } from '@angular/core';
import {GLOBALS} from "./gobals";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserSevice {
public url: String;
  constructor(
    public http: HttpClient
  ) {
    this.url = GLOBALS.url;
  }
}
