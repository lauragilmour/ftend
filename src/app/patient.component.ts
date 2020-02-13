import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})

export class PatientComponent {

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    Update() {
        var prevDate = document.getElementById('prevdate').textContent;
        var target_date = new Date(prevDate).getTime();
        var days, hours, minutes, seconds;
        var countdown = document.getElementById('countdown');

        setInterval(function () {

            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
            
            days = (hours / 24);
            hours = (seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            minutes = (seconds_left / 60);
            seconds = (seconds_left % 60);

            var d = days.toFixed(0);
            var h = hours.toFixed(0);
            var m = minutes.toFixed(0);
            var s = seconds.toFixed(0);

            var dd = Math.abs(d);
            var hh = Math.abs(h);
            var mm = Math.abs(m);
            var ss = Math.abs(s);

            if (hh >= 12) {
                countdown.innerHTML = '<label>Time since last assessment: </label><span class="days">' + dd + ' <label>Days </label><span class="hours">' + hh + ' <label>Hours</label></span> <span class="minutes">'
                    + mm + ' <label>Minutes</label></span> <span class="seconds">' + ss + ' <label>Seconds</label></span><hr><span class="note"><label>Reassessment is overdue, please assess patient as soon as possible!</label></span><style>#countdown  {background-color: red}</style>';
            }
            else {
                countdown.innerHTML = '<label>Time since last assessment: </label><span class="hours">' + hh + ' <label>Hours</label></span> <span class="minutes">'
                    + mm + ' <label>Minutes</label></span> <span class="seconds">' + ss + ' <label>Seconds</label></span>';
            }
        }, 1000);
    }

    ngOnInit() {

        this.webService.getPatient(
            this.route.snapshot.params.id);

        this.webService.getAge(
            this.route.snapshot.params.id);

        this.webService.getFluidCalculator(
            this.route.snapshot.params.id);

        this.webService.getFluidChoice(
            this.route.snapshot.params.id);

        this.webService.getFluidBalance(
            this.route.snapshot.params.id);

        this.webService.getFluidInput(
            this.route.snapshot.params.id);

        this.webService.getFluidOutput(
            this.route.snapshot.params.id);

        this.webService.getOtherAssessments(
            this.route.snapshot.params.id);

        this.webService.getRecordBloodSugar(
            this.route.snapshot.params.id);
    }
}