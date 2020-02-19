import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public auth: AuthService) { }
}