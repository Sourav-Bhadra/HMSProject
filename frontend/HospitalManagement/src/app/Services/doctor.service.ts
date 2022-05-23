import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { doctor } from '../classfiles/doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public baseURL = "http://localhost:4020";

  constructor(private httpClient: HttpClient) { }

  public createDoctor(doctor: doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/doctor`, doctor);
  }

  getDoctorByName(name: string): Observable<doctor> {

    return this.httpClient.get<doctor>(`${this.baseURL}/doctor/${name}`);
  }

  getAllDoctor(): Observable<doctor[]>{
    return this.httpClient.get<doctor[]>(`${this.baseURL}/doctor`);
  }
 
}
