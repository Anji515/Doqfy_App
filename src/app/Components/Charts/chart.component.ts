import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart', 
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartData: number[] = [40, 25, 20, 15];
  chartLabels: string[] = ['Initiated', 'Pending', 'Signed', 'Expired'];
  chartColors: string[] = ['#913ED5', '#916fad', '#c4acd8', '#e2dfe5'];
  chart: Chart | any = null;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: this.chartLabels,
          datasets: [
            {
              data: this.chartData,
              backgroundColor: this.chartColors,
              hoverBackgroundColor: this.chartColors,
            }
          ]
        },
        options: {
          tooltips: {
            callbacks: {
              label: (tooltipItem: any, data: any) => {
                const dataset = data.datasets[tooltipItem.datasetIndex];
                const total = dataset.data.reduce((previousValue: number, currentValue: number) => previousValue + currentValue);
                const currentValue = dataset.data[tooltipItem.index];
                const percentage = ((currentValue / total) * 100).toFixed(2);
                return `${data.labels[tooltipItem.index]}: ${percentage}%`;
              }
            }
          } as any
        } as any
      });
    }
  }
}