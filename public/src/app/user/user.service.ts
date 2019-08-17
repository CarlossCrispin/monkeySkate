import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { User } from './user';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//     // 'Authorization': 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private handleError: HandleError;

  
  constructor(
    private _http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  
  create (user: User): Observable<User> {
    console.log(JSON.stringify(user)+"<----servicio")
    return this._http.post<User>('/users', user)
      .pipe(
        catchError(this.handleError('create', user))
      );
  }
  destroy (user: User): Observable<{}> {
    
    const url = `/users/${user._id}`; // DELETE api/heroes/42
    return this._http.delete(url)
      .pipe(
        catchError(this.handleError('destroy',user))
      );
  }
 
  
  update (user: User): Observable<User> {
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');
    console.log(JSON.stringify(user)+"<----servicio")
    return this._http.put<User>('/users/' + user._id, user)
    .pipe(
        catchError(this.handleError('update', user))
      );
  }


  getUsers (): Observable<User[]> {
    return this._http.get<User[]>('/users')
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  // getUser(user: User) {
  //   return this._http.get('/users/' + user._id)
  //   // .pipe(
  //   //   map(data => Json(data)).toPromise()
  //   // )
  //   // .map(data => Json(data)).toPromise()
  // }
}
