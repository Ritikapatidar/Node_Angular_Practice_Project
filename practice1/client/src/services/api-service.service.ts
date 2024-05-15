import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, of, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  endpoint:string='http://localhost:8001/api'
  constructor(private http:HttpClient) {}
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Headers': '*',
      }),
    }

 
  getAllData(url:string, id?:number):Observable<any>{
    const headers = new HttpHeaders()
    headers.append('Authorization', '' + localStorage.getItem('auth-token'))
    headers.append('Content-Type', 'multipart/form-data')
   return this.http.get(this.endpoint+url).pipe(retry(1), catchError(err=> of(err)))
  }

  postData<T>(url:string, data:any):Observable<T>{ 
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': ''+ localStorage.getItem('auth-token')});
    return this.http.post<T>(this.endpoint+url ,data, {headers:headers}).pipe(catchError(this.errorHandl))
  }

  updateData<T>(url:string, data:any):Observable<T>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': ''+ localStorage.getItem('auth-token')});
    return this.http.patch<T>(this.endpoint+url, data, {headers:headers}).pipe(catchError(this.errorHandl))
  }

  deleteData<T>(url:string):Observable<T>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', 'Authorization': ''+ localStorage.getItem('auth-token')});
    return this.http.delete<T>(this.endpoint+url, {headers:headers}).pipe(catchError(this.errorHandl))
  }

   // Error handling
   errorHandl(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage)
  }
}
 