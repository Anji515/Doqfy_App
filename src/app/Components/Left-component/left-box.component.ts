import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Pending {
  id: string;
  dueDate: string;
  filesAwaitingUpload: number;
  daysAgo?: number;
}
@Component({
  selector: 'app-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftComponent implements OnInit{
  constructor( private http: HttpClient, private snackBar: MatSnackBar) { }
  
  data1: Pending[]=[] ;
  filteredData: Pending[] = []

  fetchOrdersData() {
    this.http.get<Pending[]>('https://freelancer-6ebn.onrender.com/pendingActions').subscribe(
      (data) => {
        this.data1 = data.map((item) => ({
          ...item,
          daysAgo: this.getDaysAgo(item.dueDate),
        }));

        // this.filteredData = this.data1.filter((item) => item.daysAgo > 0);
        // console.log('Pending', this.data1);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getDaysAgo(dueDate: string): number {
    const dueDateTime = new Date(dueDate).getTime();
    const currentTime = this.currentDate.getTime();
    const differenceInMilliseconds = currentTime - dueDateTime;
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const daysAgo = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    return daysAgo >= 0 ? daysAgo : -1;
  }


  showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1000, 
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }

  currentDate: Date= new Date() ;
  welcomeMessage: string='';

  ngOnInit() {
    this.fetchOrdersData()
    this.updateDate(); 
    setInterval(() => this.updateDate(), 1000 * 60); 
    this.showSnackbar(`Welcome to Doqfy Dashboard !`)
  }

  updateDate() {
    this.currentDate = new Date();
    this.welcomeMessage = `Welcome back, Anji`;
  }

}








































      
        // data = [
        //   { id: '#trd35464', daysAgo: '10', filesCount: '2' },
        //   { id: '#fdc35545', daysAgo: '10', filesCount: '2' },
        //   { id: '#jws46456', daysAgo: '10', filesCount: '2' },
        //   { id: '#klm35062', daysAgo: '10', filesCount: '2' },
        //   { id: '#ghj36042', daysAgo: '10', filesCount: '2' },
        // ];