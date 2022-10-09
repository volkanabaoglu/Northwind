import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [];
  dataLoaded = false;
  
  constructor(private todoService :TodoService) { }
  //Enjecting construct for using service(http client)
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodos().subscribe(Response=>{
      this.todos=Response
      this.dataLoaded=true;
    })
  }
}
