package com.manage.hospitalmanagement.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.manage.hospitalmanagement.exception.PatientNotPresentException;
import com.manage.hospitalmanagement.model.Doctor;
import com.manage.hospitalmanagement.model.Patient;
import com.manage.hospitalmanagement.repository.DoctorRepo;
import com.manage.hospitalmanagement.repository.PatientRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    @Autowired
    private DoctorRepo docrepo;

    @Autowired
    public PatientRepo prepo;

    // get all patients with id
    public Patient getPatient(int id) {
        Optional<Patient> patient = prepo.findById(id);
        if (!patient.isPresent()) {
            throw new PatientNotPresentException("No such patient there in the database");

        }
        Patient p1 = patient.get();
        return p1;
    }

    // Create patient with doctor name
    @Transactional
    public Doctor createPatient( Patient patient) {
        // Patient patient2 = patient;
        String docname = patient.getVisiteddoctor();
        Doctor doctor = docrepo.findByName(docname);
        
        doctor.getPatient().add(patient);
        return docrepo.save(doctor);
        
    }

}
