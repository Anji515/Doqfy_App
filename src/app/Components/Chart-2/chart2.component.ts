import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart2', 
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
  chart: Chart | any = null;

  @Input() filteredOrders: any[] = [];
  @Input() orders: any[] = [];

  initiatedCount = 0;
  signedCount = 0;
  pendingCount = 0;
  expiredCount = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filteredOrders'] && changes['filteredOrders'].currentValue) {
      this.processEsignData2();
      this.updateChart(); 
    }
  }

  ngOnInit() {
    this.createChart();
    this.processEsignData2(); 
    this.updateChart(); 
  }

  processEsignData2() {
    this.initiatedCount = this.filteredOrders.filter(order => order.eStamp === 'Initiated').length;
    // console.log('initial',this.initiatedCount)
    this.signedCount = this.filteredOrders.filter(order => order.eStamp === 'Signed').length;
    this.pendingCount = this.filteredOrders.filter(order => order.eStamp === 'Pending').length;
    this.expiredCount = this.filteredOrders.filter(order => order.eStamp === 'Expired').length;
  }

  updateChart() {
    const total = this.initiatedCount + this.signedCount + this.pendingCount + this.expiredCount;
    const percentages = [
      (this.initiatedCount / total) * 100,
      (this.pendingCount / total) * 100,
      (this.signedCount / total) * 100,
      (this.expiredCount / total) * 100
    ];

    this.chart.data.datasets[0].data = total === 0 ? [20, 40, 25, 15] : percentages;;
    this.chart.update();
  }

  createChart() {
    const ctx = document.getElementById('doughnutChart2') as HTMLCanvasElement;
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Initiated', 'Pending', 'Signed', 'Expired'],
          datasets: [
            {
              data: [], 
              backgroundColor: ['#913ED5', '#916fad', '#c4acd8', '#e2dfe5'],
              hoverBackgroundColor: ['#913ED5', '#916fad', '#c4acd8', '#e2dfe5'],
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
