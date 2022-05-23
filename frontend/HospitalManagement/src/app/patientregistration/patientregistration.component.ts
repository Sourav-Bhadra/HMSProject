import { Component, OnInit } from '@angular/core';
import { patient } from '../classfiles/patient';
import { PatientService } from '../Services/patient.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { doctor } from '../classfiles/doctor';

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {


  constructor(private patientservice: PatientService, private router: Router, private snackBar: MatSnackBar) { }
  patient = new patient();
  flag = false;
  doctorlist: any;

  ngOnInit(): void {
    this.patientservice.getAllDoctor().subscribe(data => {
      this.doctorlist = data;
    })
  }

  submitData() {
    console.log(this.patient);
    this.flag = true;
    this.patientservice.createpatient(this.patient).subscribe((data:any) => {
      console.log(data);
      this.flag=false;
      this.gotopatient();
       this.snackBar.open("Registered !!", "Ok", {

      duration:500

    });
      this.router.navigate(['/home']);
    }, (error:any) => {
      console.error(error);
    })
  }
  eventSelection(event:any) {
    this.patient.visiteddoctor = event;
  }
  gotopatient(){
    this.router.navigate(['/patient-registration']);

  }


}
