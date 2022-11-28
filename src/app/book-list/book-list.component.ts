import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  data:any=[
    {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Guide-RK-Narayan.jpg",
    "title":"The Guide",
    "author":"R.K. NARAYA",
    "price":"Rs 350",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/Malgudi-Days-RK-Narayan.jpg",
    "title":"Malgudi Days",
    "author":"R.K. NARAYA",
    "price":"Rs 325",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Private-Life-of-an-Indian-Prince-Mulk-Raj-Anand.jpg",
    "title":"The Private Life of an Indian Prince",
    "author":"MULK RAJ ANAND",
    "price":"Rs 325",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/Untouchable-Mulk-Raj-Anand.jpg",
    "title":"Untouchable",
    "author":"MULK RAJ ANAND",
    "price":"Rs 325",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/Untouchable-Mulk-Raj-Anand.jpg",
    "title":"Train to Pakistan",
    "author":"SAM",
    "price":"Rs 400",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/Godan-Munshi-Premchand.jpg",
    "title":"Godan",
    "author":"JAI RATAN",
    "price":"Rs 350",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Room-on-the-Roof-Ruskin-Bond.jpg",
    "title":"The Room on the Roof",
    "author":"JAI SAM",
    "price":"Rs 425",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Complete-Adventures-of-Feluda.jpg",
    "title":"The Complete Adventures of Feludae",
    "author":"MARTIN",
    "price":"Rs 350",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2017/03/Combat-of-Shadows-by-Manohar-Malgonkar-e1490610959883.jpg",
    "title":"Combat of Shadow",
    "author":"HENRY",
    "price":"Rs 375",
  },
  {
    "image":"https://www.bookgeeks.in/wp-content/uploads/2018/01/The-Autobiography-of-an-unknown-Indian-by-Nirad-C.-Chaudhuri.jpeg",
    "title":"The Autobiography of an Unknown Indian",
    "author":"HAWK",
    "price":"Rs 425",
  }
]

}
