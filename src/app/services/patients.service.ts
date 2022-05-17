import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientData: Patient = new Patient();
  constructor(private http:HttpClient) { }
  baseUrl:string ="https://localhost:44396/api/Admins/";

  addPatient() {
    return this.http.get<Patient>(this.baseUrl+"Student Details");
  }

}
