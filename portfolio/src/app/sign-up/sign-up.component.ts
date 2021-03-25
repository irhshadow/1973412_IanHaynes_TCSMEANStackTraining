import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  signUp(data:any) {
    let firstName = data.firstName;
    let lastName = data.lastName;
    let userName = data.userName;
    let userPassword = data.userPassword;

    sessionStorage.setItem(userName, JSON.stringify([firstName, lastName, userPassword]));
    window.location.href = "/log-in";
  }

}
