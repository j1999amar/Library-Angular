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
      if(this.username=="admin"&&this.password=="12345"){
        alert("Login is valid")
      }else{
        alert("Invalid credentials")
      }

   }

}
