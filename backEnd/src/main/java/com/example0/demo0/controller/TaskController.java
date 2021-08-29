package com.example0.demo0.controller;

import com.example0.demo0.model.Task;
import com.example0.demo0.repository.TaskRepository;
import com.example0.demo0.service.TaskServiceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@CrossOrigin
@RestController
public class TaskController {
    @Autowired
    TaskServiceImpl taskService;
    @Autowired
    TaskRepository Br;
    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> getAllTask(){
        return ResponseEntity.ok().body(taskService.getAllTask());
    }
    @GetMapping("/task/{id}")
    public ResponseEntity<Task> gettaskById(@PathVariable long id){
        return ResponseEntity.ok().body(taskService.getTaskById(id));
    }
    @PostMapping("/task")
    public ResponseEntity<Task> createtask(@RequestBody Task task){
        return ResponseEntity.ok().body(this.taskService.createTask(task));


    }
    @PutMapping("/task")
    public ResponseEntity<Task> updatetask( @RequestBody Task task){
        return ResponseEntity.ok().body(this.taskService.updateTask(task));

    }
    @DeleteMapping("/task/{id}")
    public ResponseEntity<?> deletetask(@PathVariable long id){
        this.taskService.deleteTask(id);
        return (ResponseEntity<?>) ResponseEntity.status(HttpStatus.OK);
    }
    


}
