package com.manage.hospitalmanagement.service;

import java.util.List;

import com.manage.hospitalmanagement.model.Doctor;
import com.manage.hospitalmanagement.repository.DoctorRepo;
import com.manage.hospitalmanagement.repository.PatientRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepo docrepo;

    @Autowired
    public PatientRepo prepo;

    // get doctor information
    public Doctor getInformation(String name) {
        System.out.println(">>>>>>>>>>>>" + name);
        System.out.println(docrepo.findByName(name));
        Doctor docinf = docrepo.findByName(name);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>" + docinf);
        return docinf;
    }
    //get all doctor
    public List<Doctor> getAllDoctor(){
        return docrepo.findAll();
    }

    // create doctor
    public Doctor createDoctor(Doctor doctor) {
        return docrepo.save(doctor);
    }
}
