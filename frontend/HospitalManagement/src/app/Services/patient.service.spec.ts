import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { doctor } from '../classfiles/doctor';
import { patient } from '../classfiles/patient';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let httpTestCtrl: HttpTestingController;
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  });

  // get doctor by name

  it('get doctor by name', () => {
    const testname = "Dr. Roy";
    const testpost1: doctor = {
      did: 700, name: "Dr. Roy", age: 46, gender: "Male", specialist: "Gynoologist", patient: []
    }

    service.getDoctorByName(testname).subscribe((posts) => {
      expect(posts.name).toEqual(testname, 'should check moc data');
    });
    const req = httpTestCtrl.expectOne(service.baseURL + '/doctor/' + testname);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost1);
  })

  // get patient by id

  it('get patient by id', () => {
    const testId = 45;
    const testpost1: patient = {
      pid: 45, pname: "Sushant", visiteddoctor: "Dr. Roy", dateofvisit: new Date(2013, 9, 23)
    }

    service.getpatientById(testId).subscribe((posts) => {
      expect(posts.pid).toBe(testId, 'No such Id present in database');
    });
    const req = httpTestCtrl.expectOne(service.baseURL + '/patient/'+testId);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testpost1);
  })

  // get All doctor

  it('list of doctor fetch', () => {
    const testPost: doctor[] = [{
      did: 700, name: "Dr. Roy", age: 46, gender: "Male", specialist: "Gynoologist", patient: []
    },
    {
      did: 800, name: "Dr. Ghosh", age: 56, gender: "Female", specialist: "Onkologist", patient: []
    }]
    service.getAllDoctor().subscribe((posts) => {
      expect(testPost).toBe(posts, 'should check mock data');
    });

    const req = httpTestCtrl.expectOne(service.baseURL + '/doctor');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);

  });

    // create patient

  it('Post Doctor', () => {
    const testPost: patient = {
      pid: 60, pname: "Sunil", visiteddoctor: "Dr. Ghosh", dateofvisit: new Date(2022,2,5)
    }
    service.createpatient(testPost).subscribe((posts) => {
      expect(posts).toBe(testPost, 'should check mock data');
    });

    const req = httpTestCtrl.expectOne(service.baseURL + '/patient');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);

  });


});
