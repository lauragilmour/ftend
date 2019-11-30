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

    otherAssessmentsForm;

    onSubmit() {
        console.log(this.otherAssessmentsForm.value);
        this.webService.postOtherAssessments(this.otherAssessmentsForm.value);
        this.otherAssessmentsForm.reset();
    }

    isInvalid(control) {
        return this.otherAssessmentsForm.controls[control].invalid &&
            this.otherAssessmentsForm.controls[control].touched;
    }

    isUnTouched() {
        return this.otherAssessmentsForm.controls.vipScore.pristine ||
               this.otherAssessmentsForm.controls.timeStamp.pristine;
    }

    isIncomplete() {
        return this.isInvalid('vipScore') ||
            this.isInvalid('timeStamp') ||
            this.isUnTouched();
    }


    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.otherAssessmentsForm = this.formBuilder.group({
            vipScore: ['', Validators.required],
            timeStamp: ['', Validators.required]
        });

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