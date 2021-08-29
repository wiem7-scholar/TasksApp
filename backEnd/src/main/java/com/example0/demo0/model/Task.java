package com.example0.demo0.model;

import java.util.Date;

import javax.persistence.*;
//import java.sql.Date;
//import java.sql.Timestamp;
@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id",nullable = false,updatable = false)
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name = "description")
    private String description;
   
    @Temporal (TemporalType.DATE)
    private Date created;

	public Task() {
		// TODO Auto-generated constructor stub
	}

	public Task(String name, String description, Date created) {
		super();
		this.name = name;
		this.description = description;
		this.created = created;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}
   


}
