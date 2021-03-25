import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logIn(data:any){
    console.log("here");
    let userName = data.userName;
    let givenPassword = data.userPassword;

    let info = JSON.parse(sessionStorage.getItem(userName)!);
    let password = info[2];
    if(givenPassword === password){
      window.location.href="/portfolio";
    }
    else{
      alert("Incorrect Information!");
    }
  }

}
