import { Component } from '@angular/core';
import { AuthService } from 'src/auth-service';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: []
})
export class HomeComponent {
    constructor(private authService: AuthService,
        private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    signInForm;

    onSubmit() {
        console.log(this.signInForm.value);
        this.signInForm.reset();
    }

    isUnTouched() {
        return this.signInForm.controls.Username.pristine ||
            this.signInForm.controls.Password.pristine;
    }

    isInvalid(control) {
        return this.signInForm.controls[control].invalid &&
            this.signInForm.controls[control].touched;
    }

    isIncomplete() {
        return this.isInvalid('Username') ||
            this.isInvalid('Password') ||
            this.isUnTouched();
    }

    ngOnInit() {

        this.signInForm = this.formBuilder.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }
}