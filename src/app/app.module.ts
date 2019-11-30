import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient.component';
import { PatientsComponent } from './patients.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { AuthService } from 'src/auth-service';


var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'patient/:id',
    component: PatientComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, PatientComponent, HomeComponent, 
    PatientsComponent, NavComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
