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
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patients',
    component: PatientsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id',
    component: PatientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/age',
    component: AgeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/fluidCalculator',
    component: FluidCalculatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/fluidChoice',
    component: FluidChoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:bid/fluidChoice/:rid',
    component: DiscontinueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/fluidBalance',
    component: FluidBalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/fluidInput',
    component: FluidInputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/fluidOutput',
    component: FluidOutputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/otherAssessments',
    component: OtherAssessmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'patient/:id/recordBloodSugar',
    component: RecordBloodSugarComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent, PatientComponent, HomeComponent,
    PatientsComponent, NavComponent, AgeComponent,
    OtherAssessmentsComponent, RecordBloodSugarComponent,
    FluidCalculatorComponent, FluidBalanceComponent,
    FluidChoiceComponent, DiscontinueComponent, FluidInputComponent,
    FluidOutputComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, RouterModule.forRoot(routes),
    ReactiveFormsModule, IgxExpansionPanelModule,
    BrowserAnimationsModule, MatExpansionModule, 
    Ng2SearchPipeModule, ChartsModule
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
