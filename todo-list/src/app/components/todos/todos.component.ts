import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos!:Todo[];
  
constructor(private todoservice:TodoService) { }

  ngOnInit(){
    this.todoservice.getTodos().subscribe(todos =>{
      this.todos=todos;
    });
  }
deleteTodo(todo:Todo){
  //remove from ui
this.todos=this.todos.filter(t=>t.id !== todo.id);
//remove from server
this.todoservice.deleteTodo(todo).subscribe();
}
addTodo(todo:Todo){
  this.todoservice.addTodo(todo).subscribe(todo =>{
    this.todos.push(todo)
  });
}
}
