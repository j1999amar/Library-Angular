import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""
   readValues=()=>{
    console.log("Login")

    let data=[{
      "Username":this.username,
      "password":this.password}]
      console.log(data)

   }

}
