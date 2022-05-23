import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patient } from '../classfiles/patient';
import { doctor } from '../classfiles/doctor';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public baseURL = "http://localhost:4020";

  constructor(private httpClient: HttpClient) { }


  public createpatient(patient: patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/patient`, patient);
  }

  getpatientById(id: number): Observable<patient> {

    return this.httpClient.get<patient>(`${this.baseURL}/patient/`+id);
  }
  getDoctorByName(name: string): Observable<doctor> {

    return this.httpClient.get<doctor>(`${this.baseURL}/doctor/`+name);
  }
  public getAllDoctor(): Observable<doctor[]>{
    return this.httpClient.get<doctor[]>(`${this.baseURL}/doctor`);
  }
}
