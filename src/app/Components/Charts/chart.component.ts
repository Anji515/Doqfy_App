// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-chart',
//     template: `
//       <div style="text-align: center;">
//         <canvas baseChart
//           [data]="chartData"
//           [labels]="chartLabels"
//           [chartType]="chartType"
//           [colors]="chartColors"
//           [options]="chartOptions">
//         </canvas>
//       </div>
//     `,
//   })
// export class ChartComponent {

//     @Input() initiated: number = 0;
//     @Input() pending: number = 0;
//     @Input() signed: number = 0;
//     @Input() expired: number = 0;
  
//     chartData: number[] = [0, 0, 0, 0];
//     chartLabels: string[] = ['Initiated', 'Pending', 'Signed', 'Expired'];
//     chartType: string = 'doughnut';
  
//     // Define the colors for the chart
//     chartColors: any[] = [
//       { backgroundColor: ['#FF5733', '#F0FF33', '#33FF4C', '#337BFF'] },
//     ];
  
//     chartOptions: any = {
//       responsive: true,
//       maintainAspectRatio: false,
//       cutoutPercentage: 80,
//       legend: {
//         position: 'bottom',
//         labels: {
//           fontColor: 'black',
//         },
//       },
//       tooltips: {
//         enabled: true,
//       },
//     };
  
//     ngOnChanges() {
//       this.chartData = [this.initiated, this.pending, this.signed, this.expired];
//     }
// }
