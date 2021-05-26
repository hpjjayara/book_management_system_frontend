import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  id:number|any;
  book:Book|any;

  constructor(private route: ActivatedRoute,private router: Router,private bookService:BookService) { }

  ngOnInit(): void {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBook(this.id).subscribe(data => {
      console.log(data)
      this.book = data;
    }, error => console.log(error));
  }

  updateBook() {
    this.bookService.updateBook(this.id, this.book)
      .subscribe(data => console.log(data), error => console.log(error));
        this.book = new Book();
        this.gotoList();
  }

  onSubmit() {
    this.updateBook();    
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

}
