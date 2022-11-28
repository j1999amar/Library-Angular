import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reistration',
  templateUrl: './user-reistration.component.html',
  styleUrls: ['./user-reistration.component.css']
})
export class UserReistrationComponent {
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
    console.log(data)
  }

}
