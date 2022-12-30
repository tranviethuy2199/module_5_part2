import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  api_todo : "https://localhoast/3000"
  constructor(private httpClient : HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.api_todo);
  }

  deleteId(id: number) {
    return this.httpClient.delete(this.api_todo + "/" + id);
  }
}
