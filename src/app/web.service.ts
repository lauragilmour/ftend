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

    constructor(private http: HttpClient) { }


    getPatients() {
        return this.http.get(
            'http://localhost:5000/patient')
            .subscribe(response => {
                this.patients_private_list = response;
                this.patientsSubject.next(
                    this.patients_private_list);
            })
    }

    getPatient(id) {
        return this.http.get(
            'http://localhost:5000/patient/' + id)
            .subscribe(response => {
                this.patient_private_list = response;
                this.patientSubject.next(
                    this.patient_private_list);
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

    postAge(age) {
        let postData = new FormData();
        postData.append("age", age.age);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/age',
            postData).subscribe(
                response => {
                    this.getAge(this.patientID);
                });
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

    postFluidCalculator(fluidCalculator) {
        let postData = new FormData();
        postData.append("weight", fluidCalculator.weight);
        postData.append("measurement", fluidCalculator.measurement);
        postData.append("ueAvailable", fluidCalculator.ueAvailable);
        postData.append("reasonIvFluids", fluidCalculator.reasonIvFluids);
        postData.append("commentIv", fluidCalculator.commentIv);
        postData.append("dehydration", fluidCalculator.dehydration);
        postData.append("fluidBolus", fluidCalculator.fluidBolus);
        postData.append("amount", fluidCalculator.amount);
        postData.append("commentAmount", fluidCalculator.commentAmount);
        postData.append("percentageDehydration", fluidCalculator.percentageDehydration);
        postData.append("24hrPeriod", fluidCalculator.twentyfourhrPeriod);
        postData.append("48hrPeriod", fluidCalculator.fourtyeighthrPeriod);
        postData.append("timeStamp", fluidCalculator.timeStamp);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidCalculator',
            postData).subscribe(
                response => {
                    this.getFluidCalculator(this.patientID);
                });
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

    postFluidChoice(fluidChoice) {
        let postData = new FormData();
        postData.append("electrolytesAvailable", fluidChoice.electrolytesAvailable);
        postData.append("serumSodiumRange", fluidChoice.serumSodiumRange);
        postData.append("serumPotasiumRange", fluidChoice.serumPotasiumRange);
        postData.append("ivFluidType", fluidChoice.ivFluidType);
        postData.append("ivFluidVolume", fluidChoice.ivFluidVolume);
        postData.append("ivFluidVolumeComment", fluidChoice.ivFluidVolumeComment);
        postData.append("sampleObtained", fluidChoice.sampleObtained);
        postData.append("timeStamp", fluidChoice.timeStamp);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidChoice',
            postData).subscribe(
                response => {
                    this.getFluidChoice(this.patientID);
                });
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

    postFluidBalance(fluidBalance) {
        let postData = new FormData();
        postData.append("fluidInput", fluidBalance.fluidInput);
        postData.append("volInput", fluidBalance.volInput);
        postData.append("fluidOutput", fluidBalance.fluidOutput);
        postData.append("volOutput", fluidBalance.volOutput);
        postData.append("currentBalance", fluidBalance.currentBalance);
        postData.append("overallInput", fluidBalance.overallInput);
        postData.append("overallOutput", fluidBalance.overallOutput);
        postData.append("timeStamp", fluidBalance.timeStamp);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidBalance',
            postData).subscribe(
                response => {
                    this.getFluidBalance(this.patientID);
                });
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
                });
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

    postRecordBloodSugar(recordBloodSugar) {
        let postData = new FormData();
        postData.append("bloodSugarLevel", recordBloodSugar.bloodSugarLevel);
        postData.append("clinicalComment", recordBloodSugar.clinicalComment);
        postData.append("comment", recordBloodSugar.comment);
        postData.append("timeStamp", recordBloodSugar.timeStamp);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/recordBloodSugar',
            postData).subscribe(
                response => {
                    this.getRecordBloodSugar(this.patientID);
                });
    }
}