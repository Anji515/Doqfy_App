import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-right-box',
  templateUrl: './right-box.component.html',
  styleUrls: ['./right-box.component.css'],
  providers: [DatePipe]
})
export class RightComponent {

  frequent = [
    { title: 'View Funds', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Users', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' },
    { title: 'Manage Orders', body: 'You have used this service 20 times in the last one week', link: 'Action CTA' }
  ];

  orders=[
    { count: 18, status: 'Total Orders',logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-box-open"></i>' },
    { count: 10, status: 'In Progress', logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-clock"></i>' },
    { count: 5, status: 'Completed Orders', logoPer:'<i class="fa-solid fa-arrow-up-right-dots"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-box"></i>' },
    { count: 3, status: 'Cancelled Orders', logoPer:'<i class="fa-solid fa-chart-line"></i>' , percentage: '+2.4%', logo:'<i class="fa-solid fa-stroopwafel"></i>' },
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
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];
  
  

  selectedDate: Date = new Date();
  maxDate: Date= new Date();
  startView: 'month' | 'year' = 'year';
  formattedDate: any='';

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.selectedDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear());
    
    // currentb date formatted
    this.formattedDate = this.datePipe.transform(this.selectedDate, 'MMMM yyyy');
  }

  onDateChange(event: any) {
    const selectedDate = event.value as Date;
    console.log('Selected Date:', selectedDate);

    if (selectedDate) {
      this.formattedDate = this.datePipe.transform(selectedDate, 'MMMM yyyy');
      localStorage.setItem('selectedDate', this.formattedDate.toISOString());
      console.log('Formatted Date:', this.formattedDate);
    }
  }

}
