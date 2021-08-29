package com.example0.demo0.repository;

import com.example0.demo0.model.Task;



import org.springframework.data.jpa.repository.JpaRepository;


public interface TaskRepository extends JpaRepository<Task,Long> {
	
	
	

}
