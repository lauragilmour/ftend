import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {

    patientID;
    choiceID;

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

    private oneFluidChoice_private_list;
    private oneFluidChoiceSubject = new Subject();
    oneFluidChoice_list = this.oneFluidChoiceSubject.asObservable();

    private fluidBalance_private_list;
    private fluidBalanceSubject = new Subject();
    fluidBalance_list = this.fluidBalanceSubject.asObservable();

    private fluidInput_private_list;
    private fluidInputSubject = new Subject();
    fluidInput_list = this.fluidInputSubject.asObservable();

    private fluidOutput_private_list;
    private fluidOutputSubject = new Subject();
    fluidOutput_list = this.fluidOutputSubject.asObservable();

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
                this.patient_private_list = [response];
                this.patientSubject.next(
                    this.patient_private_list);
                this.patientID = id;
                console.log(response);
            }
            )
    }

    putLastCheck() {
        let postData = new FormData();

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("lastCheck", todayDate);
        console.log(todayDate);
        this.http.put(
            'http://localhost:5000/patient/' + this.patientID,
            postData).subscribe(
                response => {
                    this.getPatient(this.patientID);
                });
    }

    putChoice(signature) {
        let postData = new FormData();

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("continue", "Stopped on " + todayDate + " by " + signature.signature)


        this.http.put(
            'http://localhost:5000/patient/' + this.patientID + '/fluidChoice/' + this.choiceID,
            postData).subscribe(
                response => {
                    this.getFluidChoice(this.patientID);
                });
    }

    getAge(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/age')
            .subscribe(response => {
                this.age_private_list = response;
                this.ageSubject.next(
                    this.age_private_list);
                this.patientID = id;
            }
            )
    }

    postAge(age) {
        let postData = new FormData();
        postData.append("age", age.age);
        postData.append("user", age.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/age',
            postData).subscribe(
                response => {
                    this.getAge(this.patientID),
                        this.putLastCheck();
                });

    }

    getFluidCalculator(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidCalculator')
            .subscribe(response => {
                this.fluidCalculator_private_list = response;
                this.fluidCalculatorSubject.next(
                    this.fluidCalculator_private_list);
                this.patientID = id;
            }
            )
    }

    postFluidCalculator(fluidCalculator) {

        let postData = new FormData();
        postData.append("weight", fluidCalculator.weight);
        postData.append("measurement", fluidCalculator.measurement);
        postData.append("ueAvailable", fluidCalculator.ueAvailable);
        postData.append("reasonIvFluids", fluidCalculator.reasonIvFluids);
        postData.append("amount", fluidCalculator.amount);
        postData.append("commentAmount", fluidCalculator.commentAmount);
        postData.append("percentageDehydration", fluidCalculator.percentageDehydration);
        postData.append("user", fluidCalculator.signature);

        let weight = Number(fluidCalculator.weight);
        let percentageDehydration = Number(fluidCalculator.percentageDehydration);
        let amount = Number(fluidCalculator.amount);
        let twentyfourhrPeriod: number = 0;
        let fourtyeighthrPeriod: number = 0;

        if (percentageDehydration == 0) {
            twentyfourhrPeriod = 0;
            fourtyeighthrPeriod = 0;
            console.log("0" + percentageDehydration)
        }
        else {
            twentyfourhrPeriod = (((weight * percentageDehydration * 10) - (amount * weight)) / 24);
            fourtyeighthrPeriod = (((weight * percentageDehydration * 10) - (amount * weight)) / 48);
        }

        postData.append("twentyfourhrPeriod", String(twentyfourhrPeriod));
        postData.append("fourtyeighthrPeriod", String(fourtyeighthrPeriod));

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidCalculator',
            postData).subscribe(
                response => {
                    this.getFluidCalculator(this.patientID),
                        this.putLastCheck();
                });
    }

    getFluidChoice(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidChoice')
            .subscribe(response => {
                this.fluidChoice_private_list = response;
                this.fluidChoiceSubject.next(
                    this.fluidChoice_private_list);
                this.patientID = id;
            }
            )
    }

    getOneFluidChoice(bid, rid) {
        return this.http.get('http://localhost:5000/patient/' + bid + '/fluidChoice/' + rid)
            .subscribe(response => {
                this.oneFluidChoice_private_list = [response];
                this.oneFluidChoiceSubject.next(
                    this.oneFluidChoice_private_list);
                this.patientID = bid;
                this.choiceID = rid;
            })
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
        postData.append("user", fluidChoice.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidChoice',
            postData).subscribe(
                response => {
                    this.getFluidChoice(this.patientID),
                        this.putLastCheck();
                });
    }

    getFluidBalance(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidBalance')
            .subscribe(response => {
                this.fluidBalance_private_list = response;
                this.fluidBalanceSubject.next(
                    this.fluidBalance_private_list);
                this.patientID = id;
            }
            )
    }

    postFluidBalance() {
        let postData = new FormData();
        let volInput = Number(7);
        let volOutput = Number(5);

        console.log(volInput)
        console.log(volOutput)

        let currentBalance = Number(volInput - volOutput);
        console.log(currentBalance)
        postData.append("currentBalance", String(currentBalance));
        postData.append("totalVolInput", String(volInput));
        postData.append("totalVolOutput", String(volOutput));

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidBalance',
            postData).subscribe(
                response => {
                    this.getFluidBalance(this.patientID),
                        this.putLastCheck();
                });
    }

    putFluidBalance() {
        let postData = new FormData();
        let volInput = Number(7);
        let volOutput = Number(5);

        console.log(volInput)
        console.log(volOutput)

        let currentBalance = Number(volInput - volOutput);
        console.log(currentBalance)
        postData.append("currentBalance", String(currentBalance));
        postData.append("totalVolInput", String(volInput));
        postData.append("totalVolOutput", String(volOutput));

        this.http.put(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidBalance',
            postData).subscribe(
                response => {
                    this.getFluidBalance(this.patientID),
                        this.putLastCheck();
                });
    }

    getFluidInput(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidInputs')
            .subscribe(response => {
                this.fluidInput_private_list = response;
                this.fluidInputSubject.next(
                    this.fluidInput_private_list);
                this.patientID = id;
            }
            )
    }

    postFluidInput(fluidInput) {
        let postData = new FormData();
        postData.append("fluidInput", fluidInput.fluidInput);
        postData.append("volInput", fluidInput.volInput);
        postData.append("user", fluidInput.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidInputs',
            postData).subscribe(
                response => {
                    this.getFluidInput(this.patientID),
                        this.putLastCheck();
                });
    }


    getFluidOutput(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/fluidOutputs')
            .subscribe(response => {
                this.fluidOutput_private_list = response;
                this.fluidOutputSubject.next(
                    this.fluidOutput_private_list);
                this.patientID = id;
            }
            )
    }

    postFluidOutput(fluidOutput) {
        let postData = new FormData();
        postData.append("fluidOutput", fluidOutput.fluidOutput);
        postData.append("volOutput", fluidOutput.volOutput);
        postData.append("user", fluidOutput.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/fluidOutputs',
            postData).subscribe(
                response => {
                    this.getFluidOutput(this.patientID),
                        this.putLastCheck();
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
        postData.append("user", otherAssessments.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/otherAssessments',
            postData).subscribe(
                response => {
                    this.getOtherAssessments(this.patientID),
                        this.putLastCheck();
                });
    }

    getRecordBloodSugar(id) {
        return this.http.get('http://localhost:5000/patient/' + id + '/recordBloodSugar')
            .subscribe(response => {
                this.recordBloodSugar_private_list = response;
                this.recordBloodSugarSubject.next(
                    this.recordBloodSugar_private_list);
                this.patientID = id;
            }
            )
    }

    postRecordBloodSugar(recordBloodSugar) {
        let postData = new FormData();
        postData.append("bloodSugarLevel", recordBloodSugar.bloodSugarLevel);
        postData.append("clinicalComment", recordBloodSugar.clinicalComment);
        postData.append("comment", recordBloodSugar.comment);
        postData.append("user", recordBloodSugar.signature);

        let today = new Date();
        let todayDate = today.getFullYear() + "-" +
            (today.getMonth() + 1) + "-" +
            today.getDate() + " " +
            today.getHours() + ":" +
            today.getMinutes() + ":" +
            today.getSeconds();

        postData.append("timeStamp", todayDate);

        this.http.post(
            'http://localhost:5000/patient/' +
            this.patientID + '/recordBloodSugar',
            postData).subscribe(
                response => {
                    this.getRecordBloodSugar(this.patientID),
                        this.putLastCheck();
                });
    }
}