import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../Task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  selectedFood: Task[] = [];
  tasks : any ;
  UserValue: any ;
  searchValue: any;
  p: number = 1;
  total:any;
  _:any;
  task!: Task;

  constructor(private userService: TaskService, private router: Router){}
  ngOnInit(){
    
    this.UserValue= new FormControl();
    this.load();
  }
  load(){
    this.userService.getAllTasks().subscribe(data => {
      this.tasks = data ;
    }, (error)  => { console.log(error);
  });
}

  deleteTask(id: number) {
    this.userService.deleteTask(id)
    .subscribe(data => {
      this.load();
    },
    error => console.log(error));
    

  }
  TaskDetails(id: number){
    
    this.router.navigate(['userdetails', id]);
  }
  updateTask(id: number) {
    this.router.navigate(['editask', id])
  }
  key:string ='id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
  deleteFoodSelected(){
    var result = confirm("Are you sure that you want to delete these tasks?");
    if (result) {
    this.selectedFood= this.tasks.filter((task: { selected: any; }) =>task.selected);
        for (var food in this.selectedFood) {
         

       this.userService.deleteTask(this.selectedFood[food].id)
         .subscribe(data =>{
          console.log(data)
         }   
         )    
      }}

    }}