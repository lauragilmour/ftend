import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'age',
    templateUrl: './age.component.html',
    styleUrls: ['./age.component.css']
})

export class AgeComponent {

    ageForm;

    onSubmit() {
        console.log(this.ageForm.value);
        this.webService.postAge(this.ageForm.value);
        this.ageForm.reset();
    }

    isInvalid(control) {
        return this.ageForm.controls[control].invalid &&
            this.ageForm.controls[control].touched;
    }

    isUnTouched() {
        return this.ageForm.controls.age.pristine ||
                this.ageForm.controls.signature.pristine;
    }

    isIncomplete() {
        return this.isInvalid('age') ||
        this.isInvalid('signature') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

        
    ngOnInit() {

        this.ageForm = this.formBuilder.group({
            age: ['', Validators.required],
            signature: ['', Validators.required]
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getAge(
            this.route.snapshot.params.id);
    }
}