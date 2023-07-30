import { Component, ViewChild , ElementRef, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.css'],
  providers: [DatePipe]
})
export class RightComponent implements OnInit {

  frequent = [
    { title: 'View Funds', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Users', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Orders', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' }
  ];

  orders=[
    { count: 18, status: 'Total Orders',logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-box-open"></i>' },
    { count: 10, status: 'In Progress', logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-clock"></i>' },
    { count: 5, status: 'Completed', logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-box"></i>' },
    { count: 3, status: 'Cancelled', logoPer:'<i class="fa-solid fa-chart-line"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-stroopwafel"></i>' },
  ]

  statesOfIndia: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];
  
  

  @ViewChild('dateInputRef', { static: true }) dateInputRef!: ElementRef;
  selectedDate: string = '';
  currentDate: string = '';

  ngOnInit() {
    this.setMinMaxDateRange();
    this.setCurrentDate();
  }

  setMinMaxDateRange() {
    const currentDate = new Date();
    const maxDate = currentDate.toISOString().split('T')[0]; // Current date as the maximum date
    const minDate = new Date(currentDate.getFullYear() - 5, 0, 1).toISOString().split('T')[0]; // 5 years ago as the minimum date
    const dateInput = this.dateInputRef.nativeElement as HTMLInputElement;
    dateInput.max = maxDate;
    dateInput.min = minDate;
  }

  setCurrentDate() {
    const currentDate = new Date();
    this.currentDate = currentDate.toISOString().split('T')[0];
    this.selectedDate = this.currentDate; // Set the selected date to the current date initially
  }

  onDateChange(selectedDate: string) {
    this.selectedDate = selectedDate;
  }

}
