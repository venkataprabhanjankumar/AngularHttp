import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable,throwError} from "rxjs";
import {catchError,retry} from "rxjs/operators";

export class Users{
  constructor(
    id : number,
    name : string,
    email : string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient : HttpClient) { }

  resource = "http://localhost:7890/users";

  httpHeader = {
    headers : new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  getUsers(): Observable<Users>{
    return this.httpClient.get<Users>(this.resource,this.httpHeader)
      .pipe(
        retry(2),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  getSingleUser(id:number):Observable<Users>{
    return this.httpClient.get<Users>(this.resource+'/'+id,this.httpHeader)
      .pipe(
        retry(2),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  addUser(data : Object):Observable<Users>{
    return this.httpClient.post(this.resource,JSON.stringify(data),this.httpHeader)
      .pipe(
        retry(1),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }

  deleteUser(id:number):Observable<Users>{
    return this.httpClient.delete(this.resource+'/'+id,this.httpHeader)
      .pipe(
        retry(1),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }
  updateUser(id:number,data:Object):Observable<Users>{
    return this.httpClient.put(this.resource+'/'+id,data,this.httpHeader)
      .pipe(
        retry(1),
        catchError(err => {
          console.log(err)
          return throwError(err)
        })
      )
  }
}
