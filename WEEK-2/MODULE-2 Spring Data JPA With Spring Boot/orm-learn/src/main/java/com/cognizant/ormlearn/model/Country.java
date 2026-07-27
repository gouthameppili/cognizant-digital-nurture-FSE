package com.cognizant.ormlearn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="country")
public class Country {
 
    @Id
    @Column(name="co_code") // Fixed mapping to match SQL table
    private String code;
 
    @Column(name="co_name") // Fixed mapping to match SQL table
    private String name;

    // Default Constructor
    public Country() {
    }

    // Getters and Setters
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // toString Method
    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}