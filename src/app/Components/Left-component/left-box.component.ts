import { Component } from '@angular/core';

@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftComponent {
  // Add any logic or functionality related to the footer here if needed
  data = [
    { id: '#trd35464', daysAgo: '10', filesCount: '2' },
    { id: '#trd35465', daysAgo: '10', filesCount: '2' },
    { id: '#trd35466', daysAgo: '10', filesCount: '2' }
  ];

}
