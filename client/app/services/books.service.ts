import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BooksService {
  constructor(private http: HttpClient) { }

  InsertBooks(credentials): Observable<any> {
    return this.http.post<any>('api/books/insert', credentials);
  }

  Getallbooks(): Observable<any> {
    return this.http.get<any>('api/books/GetAllbooks');
  }
  
  RemoveBook(credentials): Observable<any> {
    return this.http.post<any>('api/books/RemoveBook', credentials);
  }



}
