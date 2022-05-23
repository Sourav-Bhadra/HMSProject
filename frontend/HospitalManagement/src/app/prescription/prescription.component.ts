import { Component, OnInit } from '@angular/core';
import { prescription } from '../classfiles/prescription';

import { SaredataService } from '../Services/saredata.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {

  patdetails: prescription = new prescription();
  constructor(private sharedata:SaredataService) { }

  ngOnInit(): void {
    this.patdetails = this.sharedata.getprescription();
    console.log(this.patdetails);
  }


}
