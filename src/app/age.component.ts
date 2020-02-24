import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/auth-service';

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
        return this.ageForm.controls.age.pristine;
    }

    isIncomplete() {
        return this.isInvalid('age') ||
            this.isUnTouched();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public auth: AuthService) { }

        
    ngOnInit() {

        this.ageForm = this.formBuilder.group({
            age: ['', Validators.required],
            signature: ['']
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getAge(
            this.route.snapshot.params.id);
    }
}