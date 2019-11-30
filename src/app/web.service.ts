import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {

    patientID;

    private patients_private_list;
    private patientsSubject = new Subject();
    patients_list = this.patientsSubject.asObservable();

    private patient_private_list;
    private patientSubject = new Subject();
    patient_list = this.patientSubject.asObservable();

    private age_private_list;
    private ageSubject = new Subject();
    age_list = this.ageSubject.asObservable();

    private fluidCalculator_private_list;
    private fluidCalculatorSubject = new Subject();
    fluidCalculator_list = this.fluidCalculatorSubject.asObservable();

    private fluidChoice_private_list;
    private fluidChoiceSubject = new Subject();
    fluidChoice_list = this.fluidChoiceSubject.asObservable();

    private fluidBalance_private_list;
    private fluidBalanceSubject = new Subject();
    fluidBalance_list = this.fluidBalanceSubject.asObservable();

    private otherAssessments_private_list;
    private otherAssessmentsSubject = new Subject();
    otherAssessments_list = this.otherAssessmentsSubject.asObservable();

    private recordBloodSugar_private_list;
    private recordBloodSugarSubject = new Subject();
    recordBloodSugar_list = this.recordBloodSugarSubject.asObservable();

    constructor(private http: HttpClient) {}
    
    
    getPatients() {
        return this.http.get(
                        'http://localhost:5000/patient')
            .subscribe(response => {
                this.patients_private_list = response;
                this.patientsSubject.next(
                    this.patients_private_list);
            }   )  
    }

    getPatient(id) {
        return this.http.get(
                        'http://localhost:5000/patient/' + id)
            .subscribe(response => {
                this.patient_private_list = response;
                this.patientsSubject.next(
                    this.patients_private_list);
            }   
        )  
    }

    getAge(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/age')
            .subscribe(response => {
                this.age_private_list = response;
                this.ageSubject.next(
                    this.age_private_list);
            }
        )
    }

    getFluidCalculator(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidCalculator')
            .subscribe(response => {
                this.fluidCalculator_private_list = response;
                this.fluidCalculatorSubject.next(
                    this.fluidCalculator_private_list);
            }
        )
    }

    getFluidChoice(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidChoice')
            .subscribe(response => {
                this.fluidChoice_private_list = response;
                this.fluidChoiceSubject.next(
                    this.fluidChoice_private_list);
            }
        )
    }

    getFluidBalance(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidBalance')
            .subscribe(response => {
                this.fluidBalance_private_list = response;
                this.fluidBalanceSubject.next(
                    this.fluidBalance_private_list);
            }
        )
    }

    getOtherAssessments(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/otherAssessments')
            .subscribe(response => {
                this.otherAssessments_private_list = response;
                this.otherAssessmentsSubject.next(
                    this.otherAssessments_private_list);
                this.patientID = id;
            }
        )
    }

    postOtherAssessments(otherAssessments) {
        let postData = new FormData();
        postData.append("vipScore", otherAssessments.vipScore);
        postData.append("timeStamp", otherAssessments.timeStamp);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" + 
                        today.getMonth() + "-" +
                        today.getDate();

        postData.append("date", todayDate);
        
        this.http.post(
            'http://localhost:5000/patient/' + 
                    this.patientID + '/otherAssessments',
            postData).subscribe(
                response => {
                    this.getOtherAssessments(this.patientID);
                } );
      
    }

    getRecordBloodSugar(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/recordBloodSugar')
            .subscribe(response => {
                this.recordBloodSugar_private_list = response;
                this.recordBloodSugarSubject.next(
                    this.recordBloodSugar_private_list);
            }
        )
    }
}