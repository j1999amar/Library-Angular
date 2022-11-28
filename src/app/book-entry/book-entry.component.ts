import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent { 
  bookTitle=""
  bookAuthor=""
  description=""
  publisher=""
  language=""
  distributor=""
  year=""
  price=""
  image=""
readValue=()=>{
  console.log("Book Entry")
  let data =[{
    "Book Title":this.bookTitle,
    "Book Author": this.bookAuthor,
    "Book Description":this.description,
    "Book Publisher":this.publisher,
    "Book Language":this.language,
    "Book Distributor":this.distributor,
    "Book Year":this.year,
    "Book Price ":this.price,
    "Book Image":this.image
  
  }]
  console.log(data)
}

}
