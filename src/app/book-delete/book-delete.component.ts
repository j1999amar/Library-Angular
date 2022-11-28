import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  delete=""

   readValue=()=>{ 
    console.log("Delete Book")
    let data=[{
      "Delete":this.delete
    }]
    console.log(data)

  }

}
