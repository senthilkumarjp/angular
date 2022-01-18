import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo!:Todo;
@Output() deleteTodo:EventEmitter<Todo>=new EventEmitter();

  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }
  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }
    onToggle(todo:any){
      //toggle in UI
     todo.completed=!todo.completed;
     //toggle on server
     this.todoservice.togglecompleted(todo).subscribe(todo =>
      console.log(todo));
    }
    onDelete(todo:any){
     this.deleteTodo.emit(todo)
    }
  }


