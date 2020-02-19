import { Component, OnInit, ViewChild } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';


@Component({
    selector: 'fluidBalance',
    templateUrl: './fluidBalance.component.html',
    styleUrls: ['./fluidBalance.component.css']
})

export class FluidBalanceComponent implements OnInit {

    chartReady = false;

    input = 312;
    output = 450;
    balance = -138;

    responsive: true;
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] };
    plugins: {
        datalabels: {
            anchor: 'end',
            align: 'end',
        }
    }
    public barChartLabels: Label[] = ['Balance'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;

    public barChartData: ChartDataSets[] = [
        { data: [this.balance], label: "Fluid Balance" }
    ];

    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }


    public barChartTypepi: ChartType = 'pie';
    public barChartLabelspi: Label[] = ['Input', 'Output'];
    public barChartDatapi: ChartDataSets[] = [
        { data: [this.input, this.output], label: "Fluid Balance" }
    ];
    fluidBalanceForm;

    onSubmit() {


        this.input = Number(document.getElementById("input").textContent);
        this.output = Number(document.getElementById("output").textContent);
        this.balance = Number(document.getElementById("balance").textContent);
        console.log("input: " + this.input + " output: " + this.output + " balance: " + this.balance)

        this.chartReady = true;
    }

    constructor(private webService: WebService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder) { }

    isDataAvailable: boolean = false;

    ngOnInit() {

        this.fluidBalanceForm = this.formBuilder.group({
        });

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