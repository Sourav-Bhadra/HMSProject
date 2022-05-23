import { Injectable } from '@angular/core';
import { prescription } from '../classfiles/prescription';

@Injectable({
  providedIn: 'root'
})
export class SaredataService {

  constructor() { }
  prescriptiondetail = new prescription();
  
  setprescription(data:prescription){
    this.prescriptiondetail.patid = data.patid;
    this.prescriptiondetail.patname = data.patname;
    this.prescriptiondetail.visit = data.visit;
    return this.prescriptiondetail;
  }
  getprescription() {
    return this.prescriptiondetail;
  }
}
