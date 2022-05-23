import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from '../classfiles/patient';
import { PatientService } from '../Services/patient.service';
import { MatDialog } from '@angular/material/dialog';
import { PrescriptionComponent } from '../prescription/prescription.component';
import { prescription } from '../classfiles/prescription';
import { SaredataService } from '../Services/saredata.service';

@Component({

  selector: 'app-showpatients',
  templateUrl: './showpatients.component.html',
  styleUrls: ['./showpatients.component.css']
})
export class ShowpatientsComponent implements OnInit {
  errormessage = ""
  isVisible = false;
  flag = false;
  patient = new patient();
  message = "receive";
  patdetails:prescription = new prescription();

  constructor(private patientservice: PatientService, private router: Router, public dialog: MatDialog,private sharedata:SaredataService) { }

  openDialog() {
    this.patdetails.patid = this.patient.pid;
    this.patdetails.visit = this.patient.visiteddoctor;
    this.patdetails.patname = this.patient.pname;
    this.sharedata.setprescription(this.patdetails);
    console.log(this.patdetails)
    
    this.dialog.open(PrescriptionComponent);
  }

  

  ngOnInit(): void {
  }

  getPatient() {
    this.flag = true;
    this.patientservice.getpatientById(this.patient.pid).subscribe(data => {
      this.isVisible = true;
      this.patient = data;

      console.log(data);
      this.flag = false
    }, (error) => {
      this.errormessage = error.error.message;
      console.log(error);
      if (this.errormessage === "No such patient there in the database") {
        this.router.navigate(['/error']);
      }

    })

    this.isVisible = false;
  }

}
