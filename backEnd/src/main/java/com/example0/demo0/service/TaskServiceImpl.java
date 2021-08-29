package com.example0.demo0.service;

import com.example0.demo0.exception.ResourceNotFoundException;
import com.example0.demo0.model.Task;
import com.example0.demo0.repository.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
//@Transactional
public class TaskServiceImpl {

    @Autowired
    private TaskRepository taskRepository;
   // @Override
    public Task createTask(Task task) {
    	task.setCreated(new Date());
        return taskRepository.save(task);
    }

 //   @Override
    public Task updateTask(Task task) {
    	return taskRepository.save(task);
   

    }

    //@Override
    public List<Task> getAllTask() {
        return this.taskRepository.findAll();
    }

    //@Override
    public Task getTaskById(long tskId) {
        Optional<Task> taskDb = this.taskRepository.findById(tskId);
        if(taskDb.isPresent()){
            return taskDb.get();
        }else{
            throw new ResourceNotFoundException("No task found with id :"+tskId);

        }

    }

   // @Override
    public void deleteTask(long tskId) {
        Optional<Task> taskDb = this.taskRepository.findById(tskId);
        if(taskDb.isPresent()){
            this.taskRepository.delete(taskDb.get());
        }else{
            throw new ResourceNotFoundException("No book found with id :"+tskId);

        }

    }
}
