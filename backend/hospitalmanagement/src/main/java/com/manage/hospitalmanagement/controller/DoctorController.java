package com.manage.hospitalmanagement.controller;

import java.util.List;

import com.manage.hospitalmanagement.model.Doctor;
import com.manage.hospitalmanagement.service.DoctorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DoctorController {

    @Autowired
    private DoctorService docservice;

    // Get doctor information by name

    @GetMapping("/doctor/{name}")
    public Doctor getDoctor(@PathVariable String name) {
        return docservice.getInformation(name);
    }
    //get all doctors
    @GetMapping("/doctor")
    public List<Doctor> getalldoctor(){
        return docservice.getAllDoctor();
    }
    // Register Doctor

    @PostMapping("/doctor")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        return new ResponseEntity<Doctor>(docservice.createDoctor(doctor), HttpStatus.CREATED);
    }


}