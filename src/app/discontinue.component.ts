import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Button } from 'protractor';

@Component({
    selector: 'discontinue',
    templateUrl: './discontinue.component.html',
    styleUrls: ['./discontinue.component.css']
})

export class DiscontinueComponent {

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    choiceForm;

    onSubmit() {
        this.webService.putChoice(this.choiceForm.value);
        this.choiceForm.reset();
        console.log("Change to discontinue");
        (<HTMLInputElement>document.getElementById("discontinueButton")).disabled = true;
    }

    isInvalid(control) {
        return this.choiceForm.controls[control].invalid &&
            this.choiceForm.controls[control].touched;
    }

    isUnTouched() {
        return this.choiceForm.controls.signature.pristine;
    }

    isIncomplete() {
        return this.isInvalid('signature') ||
            this.isUnTouched();
    }

    ngOnInit() {

        this.choiceForm = this.formBuilder.group({
            signature: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.bid);

        this.webService.getOneFluidChoice(
            this.route.snapshot.params.bid,
            this.route.snapshot.params.rid);
    }
}