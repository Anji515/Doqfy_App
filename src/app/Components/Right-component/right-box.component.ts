import { Component, ViewChild , ElementRef, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChartComponent } from '../Charts/chart.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Order {
  status: string;
  eSign: string;
  eStamp: string;
  state: string;
  date: string;
  percentage: number;
}

@Component({
  selector: 'app-right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.css'],
  providers: [DatePipe]
})
export class RightComponent implements OnInit {
  constructor(private datePipe: DatePipe, private http: HttpClient, private snackBar: MatSnackBar) { }
  
  frequent = [
    { title: 'View Funds', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Users', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Orders', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' }
  ];

  totalDataCount = 0;
  progressCount = 0;
  cancelledCount = 0;
  completedCount = 0;
  progressData: Order[] = [];
  cancelledData: Order[] = [];
  completedData: Order[] = [];


  orders: Order[] = [];
  filteredOrders: Order[] = [];
  statesOfIndia: string[] = [];
  selectedState: string = '';
  

  @ViewChild('dateInputRef', { static: true }) dateInputRef!: ElementRef;
  @ViewChild(ChartComponent, { static: false }) chartComponent!: ChartComponent;

  selectedDate: string = '';
  currentDate: string = '';

  ngOnInit() {
    this.fetchOrdersData();
    this.setMinMaxDateRange();
    this.setCurrentDate();
    this.filterOrders()
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, 
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
  

  calculateAveragePercentage(orders: Order[]): number {
    if (orders.length === 0) {
      return 0;
    }
  
    const totalPercentage = orders.reduce((sum, order) => sum + order.percentage, 0);
    return totalPercentage / orders.length;
  }

  fetchOrdersData() {
    this.http.get<Order[]>('https://freelancer-6ebn.onrender.com/orders').subscribe(
      (data) => {
        this.orders = data;
        // console.log('orders',this.orders)
        this.statesOfIndia = [...new Set(this.orders.map(order => order.state))];
        this.totalDataCount = this.orders.length;
        this.progressCount = this.orders.filter(order => order.status === 'Progress').length;
        this.cancelledCount = this.orders.filter(order => order.status === 'Cancelled').length;
        this.completedCount = this.orders.filter(order => order.status === 'Completed').length;

        this.progressData = this.orders.filter(order => order.status === 'Progress');
        this.cancelledData = this.orders.filter(order => order.status === 'Cancelled');
        this.completedData = this.orders.filter(order => order.status === 'Completed');

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  filterOrders() {
    if (!this.selectedState) {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter(order => order.state === this.selectedState);
      this.showSnackbar('Data filtered successfully!');
    }
    this.totalDataCount = this.filteredOrders.length;
    this.progressCount = this.filteredOrders.filter(order => order.status === 'Progress').length;
    this.cancelledCount = this.filteredOrders.filter(order => order.status === 'Cancelled').length;
    this.completedCount = this.filteredOrders.filter(order => order.status === 'Completed').length;

    this.progressData = this.filteredOrders.filter(order => order.status === 'Progress');
    this.cancelledData = this.filteredOrders.filter(order => order.status === 'Cancelled');
    this.completedData = this.filteredOrders.filter(order => order.status === 'Completed');
    

    if (this.chartComponent) {
      this.chartComponent.processEsignData();
    }
  }

  setMinMaxDateRange() {
    const currentDate = new Date();
    const maxDate = currentDate.toISOString().split('T')[0];
    const minDate = new Date(currentDate.getFullYear() - 5, 0, 1).toISOString().split('T')[0];
    const dateInput = this.dateInputRef.nativeElement as HTMLInputElement;
    dateInput.max = maxDate;
    dateInput.min = minDate;
  }

  setCurrentDate() {
    const currentDate = new Date();
    this.currentDate = currentDate.toISOString().split('T')[0];
    this.selectedDate = this.currentDate; 
  }

  onDateChange(selectedDate: string) {
    this.selectedDate = selectedDate;
  }

}