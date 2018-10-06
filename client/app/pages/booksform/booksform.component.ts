import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../shared/toast/toast.component';
import {BooksService} from '../../services/books.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
@Component({
  selector: 'app-booksform',
  templateUrl: './booksform.component.html',
  styleUrls: ['./booksform.component.scss']
})
export class BooksformComponent implements OnInit {

  BooksForm: FormGroup;

  Name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  Author = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  
  date = new FormControl('', [
    Validators.required
  ]);

  published = new FormControl('', [
    Validators.required,
  ]);

  Quantity_of_books_available = new FormControl('', [
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public toast: ToastComponent,
    private BooksService: BooksService
  ) { }

  
    ngOnInit() {
      this.BooksForm = this.formBuilder.group({
        Name: this.Name,
        Author:this.Author,
        date:this.date,
        Quantity_of_books_available: this.Quantity_of_books_available,
        published: this.published
      });
    }
    insertbooks() {
      
      this.BooksService.InsertBooks(this.BooksForm.value).subscribe(
        res => {
          this.toast.open('you successfully enter new book!', 'success');
          this.router.navigate(['/booksoverview']);
        },
        error => this.toast.open('book name already exists', 'danger')
      );
    }

}
