import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit{
  data: Data | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data = this.dataService.getData()[this.dataService.getCurrentIndex()];
  }

  next(): void {
    this.dataService.setCurrentIndex(this.dataService.getNextIndex());
    this.data = this.dataService.getData()[this.dataService.getCurrentIndex()];
  }
}
