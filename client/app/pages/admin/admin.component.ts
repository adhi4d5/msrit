import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';

import { ToastComponent } from '../../shared/toast/toast.component';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/models/user.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements AfterViewInit  {


  displayedColumns = ['FirstName','LastName','PhoneNumber', 'email', 'role', 'action'];
  dataSource: MatTableDataSource<UserData>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users:any = [];

  constructor(
    public auth: AuthService,
    public toast: ToastComponent,
    private router: Router,
    private userService: UserService
  ) {

  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log("this.users",this.users);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }


  ngAfterViewInit() {

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error => console.log(error),
    () => this.isLoading = false
  );

   
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  deleteUser(user: User) {
    if (window.confirm('Are you sure you want to delete ' + user.username + '?')) {
      this.userService.deleteUser(user).subscribe(
        data => this.toast.open('user deleted successfully.', 'success'),
        error => console.log(error),
        () => this.getUsers()
      );
    }
  }


}



export interface UserData {
  _id: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  email: string;
  role: string;
  
}