import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
  name=""
  booktitle=""
  issueDate=""
  membership=""
  readValue=()=>{
    console.log("Issue Book")
    let data=[{
      "Name":this.name,
      "Book Title":this.booktitle,
      "Book Issue Date":this.issueDate,
      " Membership":this.membership

    }]
    console.log(data)
  }

}
