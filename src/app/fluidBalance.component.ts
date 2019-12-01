import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidBalance',
    templateUrl: './fluidBalance.component.html',
    styleUrls: ['./fluidBalance.component.css']
})

export class FluidBalanceComponent {

    fluidBalanceForm;

    onCalculate(){

    }

    onSubmit() {
        console.log(this.fluidBalanceForm.value);
        this.webService.postFluidBalance(this.fluidBalanceForm.value);
        this.fluidBalanceForm.reset();
    }

    isInvalid(control) {
        return this.fluidBalanceForm.controls[control].invalid &&
            this.fluidBalanceForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidBalanceForm.controls.currentBalance.pristine &&
        this.fluidBalanceForm.controls.overallInput.pristine &&
        this.fluidBalanceForm.controls.overallOutput.pristine
        this.fluidBalanceForm.controls.fluidInput.pristine &&
        this.fluidBalanceForm.controls.volInput.pristine &&
        this.fluidBalanceForm.controls.fluidOutput.pristine &&
        this.fluidBalanceForm.controls.volOutput.pristine;
    }


    isIncomplete() {
        return this.isInvalid('currentBalance') ||
            this.isInvalid('overallInput') ||
            this.isInvalid('overallOutput') ||
            this.isInvalid('fluidInput') ||
            this.isInvalid('volInput') ||
            this.isInvalid('fluidOutput') ||
            this.isInvalid('volOutput') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidBalanceForm = this.formBuilder.group({
            fluidInput: ['', Validators.required],
            volInput: ['', Validators.required],
            fluidOutput: ['', Validators.required],
            volOutput: ['', Validators.required],
            currentBalance: ['', Validators.required],
            overallInput: ['', Validators.required],
            overallOutput: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidBalance(
            this.route.snapshot.params.id);
    }
}