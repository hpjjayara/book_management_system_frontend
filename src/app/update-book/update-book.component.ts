import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  code:number|any;
  book:Book|any;

  constructor(private route: ActivatedRoute,private router: Router,private bookService:BookService) { }

  ngOnInit(): void {
    this.book = new Book();

    this.code = this.route.snapshot.params['code'];

    this.bookService.getBook(this.code).subscribe(data => {
        console.log(data);
        this.book = data[0];
    }, error => console.log(error));
  }

  updateBook() {
     this.bookService.updateBook(this.code, this.book)
      .subscribe(data => 
        console.log(data), error => console.log(error));
      this.gotoList();
  }

  onSubmit() {
    this.updateBook();    
  }

  gotoList() {

    this.router.navigate(['/books']);
  }

}
