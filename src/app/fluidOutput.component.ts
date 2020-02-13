import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidOutput',
    templateUrl: './fluidOutput.component.html',
    styleUrls: ['./fluidOutput.component.css']
})

export class FluidOutputComponent {

    fluidOutputForm;

    onSubmit() {
        console.log(this.fluidOutputForm.value);
        this.webService.postFluidOutput(this.fluidOutputForm.value);
        this.fluidOutputForm.reset();
    }

    isInvalid(control) {
        return this.fluidOutputForm.controls[control].invalid &&
            this.fluidOutputForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidOutputForm.controls.fluidOutput.pristine ||
        this.fluidOutputForm.controls.volOutput.pristine||
        this.fluidOutputForm.controls.signature.pristine;
    }


    isIncomplete() {
        return this.isInvalid('fluidOutput') ||
            this.isInvalid('volOutput') ||
            this.isInvalid('signature') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidOutputForm = this.formBuilder.group({
            fluidOutput: ['', Validators.required],
            volOutput: ['', Validators.required],
            signature: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidOutput(
            this.route.snapshot.params.id);
    }
}