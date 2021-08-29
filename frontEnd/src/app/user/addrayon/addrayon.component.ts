import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-addrayon',
  templateUrl: './addrayon.component.html',
  styleUrls: ['./addrayon.component.scss']
})
export class AddTaskComponent implements OnInit {
rayon :Task =new Task();
  constructor( private rs:TaskService) { }

  ngOnInit() {
  }
  save() {
    console.log(this.rayon);
    if (this.rayon.name && this.rayon.description){
      this.rs.createTask(this.rayon)
        .subscribe(data => console.log(data), error => console.log(error));
      this.rayon = new Task ();
    }

}}
