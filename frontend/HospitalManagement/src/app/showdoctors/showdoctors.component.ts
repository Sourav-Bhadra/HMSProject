import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Services/doctor.service';
import { PatientService } from '../Services/patient.service';
import { patient } from '../classfiles/patient';
import { doctor } from '../classfiles/doctor';


@Component({
  selector: 'app-showdoctors',
  templateUrl: './showdoctors.component.html',
  styleUrls: ['./showdoctors.component.css']
})
export class ShowdoctorsComponent implements OnInit {


  constructor(private doctorservice:DoctorService,private patientservice:PatientService) { }
  patient = new patient();
  doctorlist: any;
  flag = false;
  doctor = new doctor();
  docname = "";
  isVisible = false;
  noOfPatient=0;

  ngOnInit(): void {
    this.doctorservice.getAllDoctor().subscribe(data => {
      this.doctorlist = data;
    })
    
  }
  onclick() {
    this.flag = true;
    console.log(this.patient.visiteddoctor);
    this.docname= this.patient.visiteddoctor;
    console.log(this.docname);
    this.doctorservice.getDoctorByName(this.docname).subscribe(data => {
      this.isVisible = true;
      this.doctor = data;
      console.log(this.doctor)
      this.doctor.patient.forEach(() => {
      
        this.noOfPatient ++;
      })
      
      console.log(this.noOfPatient);
      
      this.flag = false;
    })  
    
    this.noOfPatient = 0;
 }
 
}
