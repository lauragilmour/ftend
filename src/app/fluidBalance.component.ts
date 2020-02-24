import { Component, OnInit, ViewChild } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
    selector: 'fluidBalance',
    templateUrl: './fluidBalance.component.html',
    styleUrls: ['./fluidBalance.component.css']
})

export class FluidBalanceComponent implements OnInit {

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

    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute) { }

    ngOnInit() {

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