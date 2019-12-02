import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidCalculator',
    templateUrl: './fluidCalculator.component.html',
    styleUrls: ['./fluidCalculator.component.css']
})

export class FluidCalculatorComponent {

    fluidCalculatorForm;
    twentyfourhrPeriod;
    fourtyeighthrPeriod;

    onSubmit() {
        
        // this.fourtyeighthrPeriod = this.fluidCalculatorForm.controls.percentageDehyration.value;
        // this.twentyfourhrPeriod = this.fluidCalculatorForm.controls.weight.value;
        //this.twentyfourhrPeriod = (((this.fluidCalculatorForm.controls['weight'].value * this.fluidCalculatorForm.controls['percentageDehyration'].value * 10) - (this.fluidCalculatorForm.controls['amount'].value * this.fluidCalculatorForm.controls['weight'].value)) /24 );
        //this.fourtyeighthrPeriod = (((this.fluidCalculatorForm.controls['weight'].value * this.fluidCalculatorForm.controls['percentageDehyration'].value * 10) - (this.fluidCalculatorForm.controls['amount'].value * this.fluidCalculatorForm.controls['weight'].value)) /48 );
        
        console.log(this.fluidCalculatorForm.value);
        this.webService.postFluidCalculator(this.fluidCalculatorForm.value);
            //, this.twentyfourhrPeriod, this.fourtyeighthrPeriod);
        this.fluidCalculatorForm.reset();
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
            this.fluidCalculatorForm.controls.commentIv.pristine ||
            this.fluidCalculatorForm.controls.dehydration.pristine ||
            this.fluidCalculatorForm.controls.fluidBolus.pristine ||
            this.fluidCalculatorForm.controls.amount.pristine ||
            this.fluidCalculatorForm.controls.commentAmount.pristine ||
            this.fluidCalculatorForm.controls.percentageDehydration.pristine;
    }

    isIncomplete() {
        return this.isInvalid('weight') ||
            this.isInvalid('measurement') ||
            this.isInvalid('ueAvailable') ||
            this.isInvalid('reasonIvFluids') ||
            this.isInvalid('commentIv') ||
            this.isInvalid('dehydration') ||
            this.isInvalid('fluidBolus') ||
            this.isInvalid('amount') ||
            this.isInvalid('commentAmount') ||
            this.isInvalid('percentageDehydration') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidCalculatorForm = this.formBuilder.group({
            weight: ['', Validators.required],
            measurement: ['', Validators.required],
            ueAvailable: ['', Validators.required],
            reasonIvFluids: ['', Validators.required],
            commentIv: ['', Validators.required],
            dehydration: ['', Validators.required],
            fluidBolus: ['', Validators.required],
            amount: ['', Validators.required],
            commentAmount: ['', Validators.required],
            percentageDehydration: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidCalculator(
            this.route.snapshot.params.id);
    }
}