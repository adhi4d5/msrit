import { Component, AfterViewInit,ViewChild,OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { ToastComponent } from '../../shared/toast/toast.component';
import { AuthService } from '../../services/auth.service';
import { BooksService  } from '../../services/books.service';
@Component({
  selector: 'app-bookstable',
  templateUrl: './bookstable.component.html',
  styleUrls: ['./bookstable.component.scss']
})
export class BookstableComponent implements AfterViewInit {

 
  displayedColumns = ['Name','Author','date', 'published', 'Quantity_of_books_available', 'action'];
  dataSource: MatTableDataSource<UserData>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users:any = [];

  constructor(
    public auth: AuthService,
    public toast: ToastComponent,
    private router: Router,
    private BooksService: BooksService
  ) {
   
  }


  Updatetable(){
  this.BooksService.Getallbooks().subscribe(data => {
    this.users = data;
    console.log('data data-->>',data);
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  },
  error => console.log(error),
  () => this.isLoading = false
);
  }


  ngAfterViewInit() {
    this.Updatetable();

   
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createbook(){
    this.router.navigate(['/booksadd']);
  }


  deleteUser(user:any) {
    console.log("books--",user);
    
    if(this.auth.currentUser.role='admin'){
      if (window.confirm('Are you sure you want to delete Book ' + user.Name + '?')) {
        this.BooksService.RemoveBook(user).subscribe(data => {
            console.log("sucesss-->>",data)
            this.toast.open('user deleted successfully.', 'success')
            this.Updatetable();
          } ,
          error => () =>{
            console.log("error",error);
            this.toast.open('Database is down time try after some time', 'danger')
          }
        );
      }
    }
    else{
      this.toast.open('you are not admin', 'danger')
    }

   
  }





}
export interface UserData {
  _id: string;
  Name: string;
  Quantity_of_books_available: string;
  date: string;
  published: string;
  Author: string;
  
}