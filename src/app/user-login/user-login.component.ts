import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router){}
  username=""
  password=""
readValue=()=>{
  console.log("UserLogin")
  let data=[{
    "Username":this.username,
  "Password":this.password
  }]
  if(this.username=="user"&&this.password=="12345"){
    this.route.navigate(['/bookList'])
  }else{
    alert('invalid credentials')
    this.route.navigate(['/userLogin'])
    this.username=""
    this.password=""
  }
}
}
