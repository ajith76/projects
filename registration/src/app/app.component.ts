import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataservice : DataService){}
  title = 'registration';
  ngOnInit(): void {
    const newData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
  
    ];
    this.dataservice.setData(newData);
  }
}
