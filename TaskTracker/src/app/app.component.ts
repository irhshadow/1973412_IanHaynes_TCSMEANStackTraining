import { Component } from '@angular/core';
import { TodoService } from '../app/todo.service';
import { Tasks } from '../app/Tasks';
import { createInjectable } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTracker';
  headers = ["ID","Name","Task","Deadline"];
  index = ["id", "name", "task", "deadline"];
  tasks: Tasks;

  constructor(public todoSer:TodoService){
    this.tasks = new Tasks("","","","");
  }
  
  storeTask(entry:any){
    this.todoSer.storeTodo(entry);
    this.getTask();
    return false;
  }

  getTask(){
    this.todoSer.getTodo().subscribe(
      (response: Tasks) => { this.tasks = response; });
      setTimeout(() => {this.createTable()},500);

  }

  createTable(){
    let row = document.createElement("tr");
    document.getElementById("table")!.appendChild(row);

    let cell = document.createElement("td");
    cell.innerHTML = this.tasks.ID;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = this.tasks.Name;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = this.tasks.Task;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerHTML = this.tasks.Deadline;
    row.appendChild(cell);
    
  }
  
}
