import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpUrlEncodingCodec } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ROCPService {
  constructor(private httpCli: HttpClient ) { }

  postTodos(todoForm): Observable<string>{
    let url:string = 'http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos'
    const options= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
      body: todoForm
    }; 
    return this.httpCli.post<string>(url, options);
  }

  getTodos(): Observable<string[]>{
    let url:string = 'http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos'
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })

    };
    return this.httpCli.get<string[]>(url, options);
    
  }

  getTodosById(todoForm): Observable<string>{
    let url:string = 'http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos/'+todoForm;
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    }; 
    return this.httpCli.get<string>(url, options);
  }

  deleteTodos(todoForm): Observable<string>{
    let url:string = 'http://ec2-54-175-137-78.compute-1.amazonaws.com:8080/todos/'+todoForm;
    const options: object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    }; 
    return this.httpCli.delete<string>(url, options);
  }
}
