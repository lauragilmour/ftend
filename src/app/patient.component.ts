import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})

export class PatientComponent {

    goToAge;
    goToFluidCalculator;
    goToFluidChoice;
    goToFluidBalance;
    goToOtherAssessments;
    goToRecordBloodSugar;

    onAge() {
        console.log("goToAge");
        // /patient/_id/age
    }

    onFluidCalculator() {
        console.log("goToFluidCalculator");
        // /patient/_id/fluidCalculator
    }

    onFluidChoice() {
        console.log("goToFluidChoice");
        // /patient/_id/fluidChoice
    }

    onFluidBalance() {
        console.log("goToFluidBalance");
        // /patient/_id/fluidBalance
    }

    onOtherAssessments() {
        console.log("goToOtherAssessments");
        // /patient/_id/otherAssessments
    }

    onRecordBloodSugar() {
        console.log("goToRecordBloodSugar");
        // /patient/_id/recordBloofSugar
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getAge(
            this.route.snapshot.params.id);

        this.webService.getFluidCalculator(
            this.route.snapshot.params.id);

        this.webService.getFluidChoice(
            this.route.snapshot.params.id);

        this.webService.getFluidBalance(
            this.route.snapshot.params.id);

        this.webService.getOtherAssessments(
            this.route.snapshot.params.id);

        this.webService.getRecordBloodSugar(
            this.route.snapshot.params.id);
    }
}