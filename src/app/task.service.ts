import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './user/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<any> {
    return this.http.get('http://localhost:8089/tasks');
  }

  getTask(id: number): Observable<any> {
    return this.http.get(`http://localhost:8089/task/${id}`);
  } 
  updateTask(id : number, data : any): Observable<any> {
    return this.http.put(`http://localhost:8089/task`, data);
  }

  deleteTask(id : number): Observable<any> {
    return this.http.delete(`http://localhost:8089/task/${id}`, { responseType: 'text'});
  }

  createTask(task: Task): Observable<any> {
    return this.http.post("http://localhost:8089/task", task);
  }
}






