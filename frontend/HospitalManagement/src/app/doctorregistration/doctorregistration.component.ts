import { Component, OnInit } from '@angular/core';
import { doctor } from '../classfiles/doctor';
import { DoctorService } from '../Services/doctor.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctorregistration',
  templateUrl: './doctorregistration.component.html',
  styleUrls: ['./doctorregistration.component.css']
})
export class DoctorregistrationComponent implements OnInit {

  constructor(private doctorservice: DoctorService, private router: Router, private snackBar: MatSnackBar) { }
  doctor = new doctor();
  flag = false;

  ngOnInit(): void {
    this.doctorservice.getAllDoctor().subscribe((data)=>{
      console.log(data);
    })
  }

  submitData() {
    console.log(this.doctor);
    this.flag = true;
    this.doctorservice.createDoctor(this.doctor).subscribe((data: any) => {
      console.log(data);
      this.flag = false;
      this.snackBar.open("Registered !!", "Ok", {

      duration:1000

    });
      this.router.navigate(['/home']);
    }, (error:any) => {
      console.error(error);
    })

  }


}


