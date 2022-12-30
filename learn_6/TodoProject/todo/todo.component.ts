import {Component, OnInit} from '@angular/core';
import {Todo} from "../model/Todo";
import {FormControl} from "@angular/forms";
import {TodoServiceService} from "../TodoService/todo-service.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: Todo[] = [];
  content = new FormControl();
  _id = 1;

  constructor(private todoService: TodoServiceService) {
    this.todoService.getAll().subscribe(data => {
      console.log(data);
      this.todo = data;
    }, error => {

    }, () => {

    })
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todo[i].complete = !this.todo[i].complete;
  }


  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this._id++,
        content: value,
        complete: false
      };
      this.todo.push(todo);
      this.content.reset();
    }
  }

  deleteTodo(id: any) {
    this.todoService.deleteId(parseInt(id)).subscribe(data => {
      console.log('data xoá nè' + data)
    });
    alert("Bạn có muốn xoá")
    this.todoService.getAll().subscribe(data => {
      this.todo = data;
    })
  }
  
}
