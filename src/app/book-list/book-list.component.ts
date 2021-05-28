import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";
import { Book } from "../book";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Observable<Book[]>|any;
  // dropdownGetItem: number | any;
  // actions: Array<number> | any;
  // tableName = "";
  // booksList: Object | any;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    // this.bookService.bookIds().subscribe(data => {
    //   this.actions = data;
    //   console.log(this.actions)
    // });
    this.reloadData();
  }

  reloadData() {
    this.books = this.bookService.getBooksList();
  }

  deletebook(code: number) {
    this.bookService.deleteBook(code).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookDetails(code: number){
    this.router.navigate(['details', code]);
  }

  updateBook(code:number){
    this.router.navigate(['update',code]);
  }

  // selectGetId(item: number) {
  //   console.log(item)
  //   this.dropdownGetItem = item;

  //   this.bookService.getBook(item).subscribe(data => {
  //     this.books = data; // <- after this point you have the result 
  //     console.log(this.booksList);
  //   });
  //   this.tableName = "SELECTED BOOK'S DETAILS";

  // }

}
