import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  id:number|any;
  book:Book|any;

  constructor(private route: ActivatedRoute,private router: Router,private bookService:BookService) { }

  ngOnInit(): void {
    this.book = new this.book();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id)
    .subscribe(data => {
      console.log(data)
      this.book = data;
    }, error => console.log(error));
}

list(){
  this.router.navigate(['books']);
}

}
