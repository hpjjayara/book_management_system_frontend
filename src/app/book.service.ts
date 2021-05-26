import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

//get JSONArrays
getBooksList(): Observable<any>{
  return this.http.get('http://localhost:8080/book')
}

getBook(code:number): Observable<any>{
  return  this.http.get('http://localhost:8080/book/'+code) 
}

createBook(book:object):Observable<Object>{
  return this.http.post('http://localhost:8080/book',book)
}


updateBook(code:number, value:any):Observable<Object>{
  return  this.http.put('http://localhost:8080/book/'+code,value) 
}

deleteBook(code:number){
  return  this.http.delete('http://localhost:8080/book/'+code,{ responseType: 'text' }) 
}

bookIds(){
  return this.http.get('http://localhost:8080/book/bookIds')
}

  
}

