import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { prescription } from '../classfiles/prescription';

import { SaredataService } from './saredata.service';

describe('SaredataService', () => {
  let httpTestCtrl: HttpTestingController;
  let service: SaredataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SaredataService]
    });
    service = TestBed.inject(SaredataService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });


  it('setprescription', () => {
    let prescriptiondetail = new prescription();
    prescriptiondetail.patid = 1;
    prescriptiondetail.patname = "Ram";
    prescriptiondetail.visit = "Dr. Kumar";

    let prescribe = service.setprescription(prescriptiondetail);
   
    console.log(prescribe)
    expect(prescribe).toEqual(prescriptiondetail);
    
  });

  it('getprescription', () => {
    let prescriptiondetail = new prescription();
    prescriptiondetail.patid = 1;
    prescriptiondetail.patname = "Ram";
    prescriptiondetail.visit = "Dr. Kumar";
    service.setprescription(prescriptiondetail)
    let getprescribe = service.getprescription();
    expect(getprescribe).toEqual(prescriptiondetail);
  });


});
