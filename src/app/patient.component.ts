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