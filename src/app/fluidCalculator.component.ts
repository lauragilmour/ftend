import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/auth-service';

@Component({
    selector: 'fluidCalculator',
    templateUrl: './fluidCalculator.component.html',
    styleUrls: ['./fluidCalculator.component.css']
})

export class FluidCalculatorComponent {

    fluidCalculatorForm;

    onSubmit() {
        console.log(this.fluidCalculatorForm.value);
        this.webService.postFluidCalculator(this.fluidCalculatorForm.value);
        this.fluidCalculatorForm.reset();
        var returnB = document.getElementById('return');
        returnB.click();
    }

    isInvalid(control) {
        return this.fluidCalculatorForm.controls[control].invalid &&
            this.fluidCalculatorForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidCalculatorForm.controls.weight.pristine ||
            this.fluidCalculatorForm.controls.measurement.pristine ||
            this.fluidCalculatorForm.controls.ueAvailable.pristine ||
            this.fluidCalculatorForm.controls.reasonIvFluids.pristine ||
            this.fluidCalculatorForm.controls.amount.pristine ||
            this.fluidCalculatorForm.controls.percentageDehydration.pristine;
    }

    isIncomplete() {
        return this.isInvalid('weight') ||
            this.isInvalid('measurement') ||
            this.isInvalid('ueAvailable') ||
            this.isInvalid('reasonIvFluids') ||
            this.isInvalid('amount') ||
            this.isInvalid('percentageDehydration') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public auth: AuthService) { }


    ngOnInit() {

        this.fluidCalculatorForm = this.formBuilder.group({
            weight: ['', Validators.required],
            measurement: ['', Validators.required],
            ueAvailable: ['', Validators.required],
            reasonIvFluids: ['', Validators.required],
            amount: ['', Validators.required],
            commentAmount: [''],
            percentageDehydration: ['', Validators.required],
            signature: ['']
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidCalculator(
            this.route.snapshot.params.id);
    }
}