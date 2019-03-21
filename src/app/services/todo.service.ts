import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl : string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private _http : HttpClient) { 

  }

  getTodos():Observable<Todo[]>{
      return this._http.get<Todo[]>(this.todosUrl);
  }
  // toggle completed todo

  toggleCompleted(todo : Todo) : Observable<any>{
       const url = `${this.todosUrl}/${todo.id}`;
       return this._http.put(url, todo, httpOptions);
  }

  deleteTodo (todo : Todo): Observable<Todo>{
      const url = `${this.todosUrl}/${todo.id}`;
      return this._http.delete<Todo>(url, httpOptions)
  }

  addTodo (todo : Todo) : Observable<Todo>{
    return this._http.post<Todo>(this.todosUrl,todo, httpOptions)
  }
}
