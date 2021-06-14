/**
 * @author Jayathi_Jayara
 * @version 1.0
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
  { path:'',redirectTo:'book', pathMatch: 'full'},
  { path:'books',component:BookListComponent},
  { path: 'add', component: CreateBookComponent },
  { path:'update/:code',component:UpdateBookComponent},
  { path: 'details/:code', component: BookDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
