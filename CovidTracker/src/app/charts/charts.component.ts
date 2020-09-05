import { Component, OnInit } from '@angular/core';
//import { ChartService } from './charts.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  title = 'app';
  public pieChartLabels:string[] = ["Total Cases", "Total Deaths", "Total Recovered"];
  public pieChartData:number[] = [14429371, 604963, 8620950];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FFFFFF",
            "rgb(238, 122, 122)",
            "rgb(182, 232, 108)",
            ]}
 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }
}

