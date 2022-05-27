package com.manage.hospitalmanagement.controller;

import java.util.List;

import com.manage.hospitalmanagement.model.Doctor;
import com.manage.hospitalmanagement.model.Patient;
import com.manage.hospitalmanagement.service.PatientService;
import org.springframework.http.MediaType;
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
public class PatientController {

    @Autowired
    private PatientService patservice;

    // Get patient

    @GetMapping("/patient/{id}")
    public Patient getPatient(@PathVariable int id) {
        return patservice.getPatient(id);
    }

    // Register patient

    @PostMapping("/patient")
    public Doctor createPatient(@RequestBody Patient patient) {
        return patservice.createPatient(patient);
    }
}