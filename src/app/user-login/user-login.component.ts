import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username=""
  password=""
readValue=()=>{
  console.log("UserLogin")
  let data=[{
    "Username":this.username,
  "Password":this.password
  }]
  console.log(data)
}
}
