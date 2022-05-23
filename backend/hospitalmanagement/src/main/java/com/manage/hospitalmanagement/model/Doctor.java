package com.manage.hospitalmanagement.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Doctor{
    @Id
    private int did;
    private String name;
    private int age;
    private String gender;
    private String specialist;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY, targetEntity = Patient.class)
    // @JoinColumn(name = "doc_id", referencedColumnName = "did")
    private List<Patient> patient;


    public Doctor() {
    }

    public Doctor(int did, String name, int age, String gender, String specialist) {
        this.did = did;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.specialist = specialist;
    }

    public int getDid() {
        return this.did;
    }

    public void setDid(int did) {
        this.did = did;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSpecialist() {
        return this.specialist;
    }

    public void setSpecialist(String specialist) {
        this.specialist = specialist;
    }

    public List<Patient> getPatient() {
        return this.patient;
    }

    public void setPatient(List<Patient> patient) {
        this.patient = patient;
    }

    @Override
    public String toString() {
        return "{" +
            " did='" + getDid() + "'" +
            ", name='" + getName() + "'" +
            ", age='" + getAge() + "'" +
            ", gender='" + getGender() + "'" +
            ", specialist='" + getSpecialist() + "'" +
            ", patient='" + getPatient() + "'" +
            "}";
    }

    
}