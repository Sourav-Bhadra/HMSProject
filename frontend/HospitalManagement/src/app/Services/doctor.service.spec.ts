import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DoctorService } from './doctor.service';
import { doctor } from '../classfiles/doctor';

describe('DoctorService', () => {

  let httpTestCtrl: HttpTestingController;
  let service: DoctorService; 

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DoctorService]
  }));

  beforeEach(() => {
    service = TestBed.inject(DoctorService);
    httpTestCtrl = TestBed.inject(HttpTestingController);
  })

  afterEach(() => {
    httpTestCtrl.verify();
  });

  // get All doctor

  it('get All Doctor', () => {
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

  // create doctor

  it('Post Doctor', () => {
    const testPost: doctor = {
      did: 700, name: "Dr. Roy", age: 46, gender: "Male", specialist: "Gynoologist", patient: []
    }
    service.createDoctor(testPost).subscribe((posts) => {
      expect(posts).toBe(testPost, 'should check mock data');
    });

    const req = httpTestCtrl.expectOne(service.baseURL + '/doctor');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(testPost);

  });

});
