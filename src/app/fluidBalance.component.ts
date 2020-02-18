import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'fluidBalance',
    templateUrl: './fluidBalance.component.html',
    styleUrls: ['./fluidBalance.component.css']
})

export class FluidBalanceComponent {

    fluidBalanceForm;

    onSubmit() {
        console.log("Clicked")
        this.webService.postFluidBalance();
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }


    ngOnInit() {

        this.fluidBalanceForm = this.formBuilder.group({
        });

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getFluidBalance(
            this.route.snapshot.params.id);

        this.webService.getFluidInput(
            this.route.snapshot.params.id);

        this.webService.getFluidOutput(
            this.route.snapshot.params.id);
    }
}