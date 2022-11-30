import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reistration',
  templateUrl: './user-reistration.component.html',
  styleUrls: ['./user-reistration.component.css']
})
export class UserReistrationComponent {
  constructor(private route:Router){}
  name=""
  addhaar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confrimPassword=""
  readValue=()=>{
    console.log("User Registration")
    let data=[{
      "Name":this.name,
      "Addhaar":this.addhaar,
      "Address":this.address,
      "Pincode":this.pincode,
      "DoB":this.dob,
      "Email":this.email,
      "Phone":this.phone,
      "Username":this.username,
      "Password":this.password,
      "Confirm Password":this.confrimPassword
    }]
    if(this.name!=""&&this.addhaar!=""&&this.address!=""&&this.pincode!=""&&this.dob!=""&&this.email!=""&&this.phone!=""&&this.username!=""&&this.password!=""&&this.confrimPassword!=""){
      this.route.navigate(['/userLogin'])
    }else{
      alert("enter all the fields")
        this.name=""
        this.addhaar=""
        this.address=""
        this.pincode=""
        this.dob=""
        this.email=""
        this.phone=""
        this.username=""
        this.password=""
        this.confrimPassword=""
        this.route.navigate(['/userRegistration'])
      }
    }
  }


