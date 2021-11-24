import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  //apiURL = 'https://jsonplaceholder.typicode.com';
   apiURL = 'http://192.168.83.208:3000';
  constructor(private http: HttpClient) { }


  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(
      retry(3)
    );
  }
  getPost(id): Observable<any> {
    return this.http.get(this.apiURL + '/posts/' + id).pipe(
      retry(3)
    );
  }
  getUsuarios(): Observable<any> {
    return this.http.get(this.apiURL + '/users/').pipe(
      retry(3)
    );
  }
  getUsuario(userId): Observable<any> {
    return this.http.get(this.apiURL + '/users/' + userId).pipe(
      retry(3)

    );
  }
  CreatePost(post): Observable<any> {
    return this.http.post(this.apiURL + '/post/', post, this.httpOptions).pipe(
      retry(3)

    );
  }
  updatePost(id, post): Observable<any> {
    return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe
      (retry(3)
      );
  }

  deletePost(id): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }



}
