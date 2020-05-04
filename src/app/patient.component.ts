import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Colors, Color } from 'ng2-charts';
import { AuthService } from 'src/auth-service';

@Component({
    selector: 'patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})

export class PatientComponent {

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        public auth: AuthService) { }

    responsive: true;
    scales: { xAxes: [{}], yAxes: [{}] };
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        } 
    }

    public barChartType: ChartType = 'horizontalBar';
    public barChartLabels: Label[] = ['Input', 'Output', 'Balance'];
    public barChartTypepi: ChartType = 'pie';
    public barChartLabelspi: Label[] = ['Input', 'Output'];

    public barChartLegend = true;

    public chartColors: Array<any> = [
        { 
          backgroundColor: ['#F4D03F', '#28B463', '#3498DB']
        }
    ]

    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    Update() {
        var prevDate = document.getElementById('prevdate').textContent;
        var target_date = new Date(prevDate).getTime();
        var days, hours, minutes, seconds;
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

            if (hh >= 12) {
                countdown.innerHTML = '<label>Time since last assessment: </label><span class="hours">' + hh + ' <label>Hours</label></span> <span class="minutes">'
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