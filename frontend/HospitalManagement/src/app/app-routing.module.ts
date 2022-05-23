import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorregistrationComponent } from './doctorregistration/doctorregistration.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientregistrationComponent } from './patientregistration/patientregistration.component';
import { ShowdoctorsComponent } from './showdoctors/showdoctors.component';
import { ShowpatientsComponent } from './showpatients/showpatients.component';

const routes: Routes = [
  {
    path:"",redirectTo:"home",pathMatch:'full'
  },
{
  path:"doctor-registration",component:DoctorregistrationComponent,pathMatch:'full'
  },
  {
    path:"patient-registration",component:PatientregistrationComponent,pathMatch:'full'
  },
  {
    path:"showdoctor-information",component:ShowdoctorsComponent,pathMatch:'full'
  },
  {
    path:"showpatient-information",component:ShowpatientsComponent,pathMatch:'full'
  },
  {
    path:"home",component:HomepageComponent,pathMatch:'full'
  },
  {
    path:"error",component:ErrorpageComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
