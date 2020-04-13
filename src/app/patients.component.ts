import { Component } from '@angular/core';
import { WebService } from './web.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})

export class PatientsComponent {
    constructor(private webService: WebService,
        private formBuilder: FormBuilder) { }

    resetBalance;

    onSubmit() {
        console.log("Reset Balance");
        this.webService.putResetBalance();
    }

    ngOnInit() {
        this.webService.getPatients();
        this.resetBalance = this.formBuilder.group({
        });
    }
}