import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './app-chart.component.html',
  styleUrls: ['./app-chart.component.css']
})
export class AppChartComponent implements OnInit {
  @Input()
  chartData: any = {};
  @Input()
  chartDays: string[];
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: ''}
  ];

  constructor() { }

  ngOnInit() {
    this.buildCharts();
  }

  private buildCharts() {
    if (this.chartData) {
      console.log(this.chartData.name);
      console.log(this.chartData.dataArray);
      console.log(this.chartDays);
      this.barChartLabels = this.chartDays;
      this.barChartData[0].data = this.chartData.dataArray;
      this.barChartData[0].label = this.chartData.name;
    }
  }

}
