import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})

export class PatientsComponent {
    constructor(private webService: WebService) {}
    
    ngOnInit(){
        this.webService.getPatients();
    }
}