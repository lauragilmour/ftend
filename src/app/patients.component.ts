import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})

export class PatientsComponent {
    constructor(private webService: WebService) {}
    
    searchText;
    heroes = [
        { id: 11, name: 'Mr. Nice', country: 'India' },
        { id: 12, name: 'Narco' , country: 'USA'},
        { id: 13, name: 'Bombasto' , country: 'UK'},
        { id: 14, name: 'Celeritas' , country: 'Canada' },
        { id: 15, name: 'Magneta' , country: 'Russia'},
        { id: 16, name: 'RubberMan' , country: 'China'},
        { id: 17, name: 'Dynama' , country: 'Germany'},
        { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
        { id: 19, name: 'Magma' , country: 'South Africa'},
        { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
      ];
    ngOnInit(){
        this.webService.getPatients();
    }
}