import { Component } from '@angular/core';
import { AuthService } from 'src/auth-service';

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html',
    styleUrls: []
})
export class NavComponent { 
     constructor(private authService: AuthService) {}
}