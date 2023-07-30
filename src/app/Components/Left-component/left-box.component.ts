import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftComponent implements OnInit{
  
  data = [
    { id: '#trd35464', daysAgo: '10', filesCount: '2' },
    { id: '#fdc35545', daysAgo: '10', filesCount: '2' },
    { id: '#jws46456', daysAgo: '10', filesCount: '2' },
    { id: '#klm35062', daysAgo: '10', filesCount: '2' },
    { id: '#ghj36042', daysAgo: '10', filesCount: '2' },
  ];
  currentDate: Date= new Date() ;
  welcomeMessage: string='';

  ngOnInit() {
    this.updateDate(); 
    setInterval(() => this.updateDate(), 1000 * 60); 
  }

  updateDate() {
    this.currentDate = new Date();
    this.welcomeMessage = `Welcome back, Anji`;
  }


}
