import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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
        this.webService.putChoice();
        console.log("Change to discontinue");
    }

    ngOnInit() {

        this.choiceForm = this.formBuilder.group({
        });

        this.webService.getPatient(
            this.route.snapshot.params.bid);

        this.webService.getOneFluidChoice(
            this.route.snapshot.params.bid,
            this.route.snapshot.params.rid);
        }
}