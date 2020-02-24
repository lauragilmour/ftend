import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Button } from 'protractor';
import { AuthService } from 'src/auth-service';

@Component({
    selector: 'discontinue',
    templateUrl: './discontinue.component.html',
    styleUrls: ['./discontinue.component.css']
})

export class DiscontinueComponent {

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public auth: AuthService) { }

    choiceForm;

    onSubmit() {
        this.webService.putChoice(this.choiceForm.value);
        this.choiceForm.reset();
        console.log("Change to discontinue");
        (<HTMLInputElement>document.getElementById("discontinueButton")).disabled = true;
    }

    ngOnInit() {

        this.choiceForm = this.formBuilder.group({
            signature: ['']
        });

        this.webService.getPatient(
            this.route.snapshot.params.bid);

        this.webService.getOneFluidChoice(
            this.route.snapshot.params.bid,
            this.route.snapshot.params.rid);
    }
}