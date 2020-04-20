import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: string;
  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {
    this.title = 'Register';
  }

  ngOnInit(): void {
  }

}
