import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'otherAssessments',
    templateUrl: './otherAssessments.component.html',
    styleUrls: ['./otherAssessments.component.css']
})

export class OtherAssessmentsComponent {

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
        return this.otherAssessmentsForm.controls.vipScore.pristine;
    }

    isIncomplete() {
        return this.isInvalid('vipScore') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.otherAssessmentsForm = this.formBuilder.group({
            vipScore: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getOtherAssessments(
            this.route.snapshot.params.id);
    }
}