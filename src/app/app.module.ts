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
import { AgeComponent } from './age.component';
import { FluidCalculatorComponent } from './fluidCalculator.component';
import { FluidChoiceComponent } from './fluidChoice.component';
import { FluidBalanceComponent } from './fluidBalance.component';
// import { FluidReviewComponent } from './fluidReview.component';
import { OtherAssessmentsComponent } from './otherAssessments.component';
import { RecordBloodSugarComponent } from './recordBloodSugar.component';

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
  },
  {
    path: 'patient/:id/age',
    component: AgeComponent
  },
  {
    path: 'patient/:id/fluidCalculator',
    component: FluidCalculatorComponent
  },
  {
    path: 'patient/:id/fluidChoice',
    component: FluidChoiceComponent
  },
  {
    path: 'patient/:id/fluidBalance',
    component: FluidBalanceComponent
  },
  // {
  //   path: ':id/fluidReview',
  //   component: FluidReviewComponent
  // },
  {
    path: 'patient/:id/otherAssessments',
    component: OtherAssessmentsComponent
  }, 
  {
    path: 'patient/:id/recordBloodSugar',
    component: RecordBloodSugarComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, PatientComponent, HomeComponent, 
    PatientsComponent, NavComponent, AgeComponent, 
    OtherAssessmentsComponent, RecordBloodSugarComponent,
    FluidCalculatorComponent, // FluidReviewComponent,
    FluidBalanceComponent, FluidChoiceComponent
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
