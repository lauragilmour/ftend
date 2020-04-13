import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/auth-service';

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
        var returnB = document.getElementById('return');
        returnB.click();
    }

    isInvalid(control) {
        return this.fluidInputForm.controls[control].invalid &&
            this.fluidInputForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidInputForm.controls.fluidInput.pristine ||
        this.fluidInputForm.controls.volInput.pristine;
    }


    isIncomplete() {
        return this.isInvalid('fluidInput') ||
            this.isInvalid('volInput') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public auth: AuthService) { }


    ngOnInit() {

        this.fluidInputForm = this.formBuilder.group({
            fluidInput: ['', Validators.required],
            volInput: ['', Validators.required],
            signature: ['']
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidInput(
            this.route.snapshot.params.id);
    }
}