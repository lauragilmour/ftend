import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidChoice',
    templateUrl: './fluidChoice.component.html',
    styleUrls: ['./fluidChoice.component.css']
})

export class FluidChoiceComponent {

    fluidChoiceForm;

    onSubmit() {
        console.log(this.fluidChoiceForm.value);
        this.webService.postFluidChoice(this.fluidChoiceForm.value);
        this.fluidChoiceForm.reset();
    }

    isInvalid(control) {
        return this.fluidChoiceForm.controls[control].invalid &&
            this.fluidChoiceForm.controls[control].touched;
    }

    isUnTouched() {
        return this.fluidChoiceForm.controls.electrolytesAvailable.pristine &&
        this.fluidChoiceForm.controls.serumSodiumRange.pristine &&
        this.fluidChoiceForm.controls.serumPotasiumRange.pristine &&
        this.fluidChoiceForm.controls.ivFluidType.pristine &&
        this.fluidChoiceForm.controls.ivFluidVolume.pristine &&
        this.fluidChoiceForm.controls.ivFluidVolumeComment.pristine &&
        this.fluidChoiceForm.controls.sampleObtained.pristine &&
        this.fluidChoiceForm.controls.timeStamp.pristine;
    }

    isIncomplete() {
        return this.isInvalid('electrolytesAvailable') ||
            this.isInvalid('serumSodiumRange') ||
            this.isInvalid('serumPotasiumRange') ||
            this.isInvalid('ivFluidType') ||
            this.isInvalid('ivFluidVolume') ||
            this.isInvalid('ivFluidVolumeComment') ||
            this.isInvalid('sampleObtained') ||
            this.isInvalid('timeStamp') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidChoiceForm = this.formBuilder.group({
            electrolytesAvailable: ['', Validators.required],
            serumSodiumRange: ['', Validators.required],
            serumPotasiumRange: ['', Validators.required],
            ivFluidType: ['', Validators.required],
            ivFluidVolume: ['', Validators.required],
            ivFluidVolumeComment: [''],
            sampleObtained: ['', Validators.required],
            timeStamp: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidChoice(
            this.route.snapshot.params.id);
    }
}