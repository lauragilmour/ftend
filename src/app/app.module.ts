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
import { DiscontinueComponent } from './discontinue.component';
import { FluidBalanceComponent } from './fluidBalance.component';
import { FluidInputComponent } from './fluidInput.component';
import { FluidOutputComponent } from './fluidOutput.component';
import { OtherAssessmentsComponent } from './otherAssessments.component';
import { RecordBloodSugarComponent } from './recordBloodSugar.component';
import { IgxExpansionPanelModule } from 'igniteui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    path: 'patient/:bid/fluidChoice/:rid',
    component: DiscontinueComponent
  },
  {
    path: 'patient/:id/fluidBalance',
    component: FluidBalanceComponent
  },
  {
    path: 'patient/:id/fluidInput',
    component: FluidInputComponent
  },
  {
    path: 'patient/:id/fluidOutput',
    component: FluidOutputComponent
  },
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
    FluidCalculatorComponent, FluidBalanceComponent,
    FluidChoiceComponent, DiscontinueComponent, FluidInputComponent,
    FluidOutputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, RouterModule.forRoot(routes),
    ReactiveFormsModule, IgxExpansionPanelModule,
    BrowserAnimationsModule, MatExpansionModule, 
    Ng2SearchPipeModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
