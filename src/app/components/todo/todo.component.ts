import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todo1 => {
      this.todos = todo1;
    });
  }

  deleteTodo(todo:Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe(t => console.log('deleted item', t.id));
  }

  addTodo(todo:Todo){
    //this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.addTodo(todo).subscribe(t => {
      this.todos.push(t);
    });
  }

}
