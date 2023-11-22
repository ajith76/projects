import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  data: Data | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData()[this.dataService.getCurrentIndex()];
  }

  previous(): void {
    this.dataService.setCurrentIndex(this.dataService.getPreviousIndex());
    this.data = this.dataService.getData()[this.dataService.getCurrentIndex()];
  }

}
