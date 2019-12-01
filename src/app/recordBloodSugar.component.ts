import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'recordBloodSugar',
    templateUrl: './recordBloodSugar.component.html',
    styleUrls: ['./recordBloodSugar.component.css']
})

export class RecordBloodSugarComponent {

    recordBloodSugarForm;

    onSubmit() {
        console.log(this.recordBloodSugarForm.value);
        this.webService.postRecordBloodSugar(this.recordBloodSugarForm.value);
        this.recordBloodSugarForm.reset();
    }

    isInvalid(control) {
        return this.recordBloodSugarForm.controls[control].invalid &&
            this.recordBloodSugarForm.controls[control].touched;
    }

    isUnTouched() {
        return this.recordBloodSugarForm.controls.bloodSugarLevel.pristine &&
        this.recordBloodSugarForm.controls.clinicalComment.pristine &&
        this.recordBloodSugarForm.controls.comment.pristine &&
        this.recordBloodSugarForm.controls.timeStamp.pristine;
    }

    isIncomplete() {
        return this.isInvalid('bloodSugarLevel') ||
            this.isInvalid('clinicalComment') ||
            this.isInvalid('comment') ||
            this.isInvalid('timeStamp') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.recordBloodSugarForm = this.formBuilder.group({
            bloodSugarLevel: ['', Validators.required],
            clinicalComment: ['', Validators.required],
            comment: [''],
            timeStamp: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getRecordBloodSugar(
            this.route.snapshot.params.id);
    }
}