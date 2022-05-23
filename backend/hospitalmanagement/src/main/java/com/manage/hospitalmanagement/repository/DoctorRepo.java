package com.manage.hospitalmanagement.repository;

import java.util.List;

import com.manage.hospitalmanagement.model.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

    @Transactional
    Doctor findByName(String name);

}