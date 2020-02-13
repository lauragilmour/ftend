import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidInput',
    templateUrl: './fluidInput.component.html',
    styleUrls: ['./fluidInput.component.css']
})

export class FluidInputComponent {

    fluidInputForm;

    onSubmit() {
        console.log(this.fluidInputForm.value);
        this.webService.postFluidInput(this.fluidInputForm.value);
        this.fluidInputForm.reset();
    }

    isInvalid(control) {
        return this.fluidInputForm.controls[control].invalid &&
            this.fluidInputForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidInputForm.controls.fluidInput.pristine ||
        this.fluidInputForm.controls.volInput.pristine ||
        this.fluidInputForm.controls.signature.pristine;
    }


    isIncomplete() {
        return this.isInvalid('fluidInput') ||
            this.isInvalid('volInput') ||
            this.isInvalid('signature') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidInputForm = this.formBuilder.group({
            fluidInput: ['', Validators.required],
            volInput: ['', Validators.required],
            signature: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidInput(
            this.route.snapshot.params.id);
    }
}