import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  search=""
readValue=()=>{
  console.log("Search Book")
  let data=[{
    "Search Book ":this.search
  }]
  console.log(data)
}

}
