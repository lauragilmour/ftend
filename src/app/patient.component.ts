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
        // set the date we're counting down to
        var prevDate = document.getElementById('prevdate').textContent;
        var target_date = new Date(prevDate).getTime();
        var hours, minutes, seconds;
        var countdown = document.getElementById('countdown');
        
        setInterval(function () {

            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            hours = (seconds_left / 3600);
            seconds_left = seconds_left % 3600;
            minutes = (seconds_left / 60);
            seconds = (seconds_left % 60);

            var h = hours.toFixed(0);
            var m = minutes.toFixed(0);
            var s = seconds.toFixed(0);

            var hh = Math.abs(h);
            var mm = Math.abs(m);
            var ss = Math.abs(s);

            if ( hh >= 12) {
                countdown.innerHTML = '<span class="note"><label>Reassessment is overdue, please assess patient as soon as possible!</label></span><hr><span class="hours">' + hh + ' <label>Hours</label></span> <span class="minutes">'
                    + mm + ' <label>Minutes</label></span> <span class="seconds">' + ss + ' <label>Seconds</label></span>';
            }
            else {
                countdown.innerHTML = '<span class="hours">' + hh + ' <label>Hours</label></span> <span class="minutes">'
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

        this.webService.getOtherAssessments(
            this.route.snapshot.params.id);

        this.webService.getRecordBloodSugar(
            this.route.snapshot.params.id);



        // var prevDate = document.getElementById('prevdate');
        // // set the date we're counting down to
        // if (prevDate == null) {
        //     prevDate = document.getElementById('prevdate');
        //     console.log("Previous date " + prevDate);
        // }
        // //var prevDate2 = document.getElementById('prevdate').textContent;
        // var target_date = new Date('January, 31, 2020').getTime();
        // var days, hours, minutes, seconds;
        // var countdown = document.getElementById('countdown');

        // console.log("Previous date " + prevDate);
        // //console.log("Previous date2 " + prevDate2);
        // console.log("countdown" + countdown);

        // setInterval(function () {

        //     var current_date = new Date().getTime();
        //     var seconds_left = (target_date - current_date) / 1000;

        //     days = (seconds_left / 86400);
        //     seconds_left = seconds_left % 86400;
        //     hours = (seconds_left / 3600);
        //     seconds_left = seconds_left % 3600;
        //     minutes = (seconds_left / 60);
        //     seconds = (seconds_left % 60);

        //     var d = days.toFixed(0);
        //     var h = hours.toFixed(0);
        //     var m = minutes.toFixed(0);
        //     var s = seconds.toFixed(0);

        //     if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        //         countdown.innerHTML = '<span class="note"><label>Reassessment is overdue, please assess patient as soon as possible!</label></span><span class="days">' + d + ' <label>Days</label></span> <span class="hours">' + h + ' <label>Hours</label></span> <span class="minutes">'
        //             + m + ' <label>Minutes</label></span> <span class="seconds">' + s + ' <label>Seconds</label></span>';
        //     }
        //     else {
        //         countdown.innerHTML = '<span class="days">' + d + ' <label>Days</label></span> <span class="hours">' + h + ' <label>Hours</label></span> <span class="minutes">'
        //             + m + ' <label>Minutes</label></span> <span class="seconds">' + s + ' <label>Seconds</label></span>';
        //     }
        // }, 1000);


    }
}