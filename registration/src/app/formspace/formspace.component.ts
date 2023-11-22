import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.css']
  
})
export class FormspaceComponent {
  constructor(public dataService:DataService){

  }
  increment(){
    let steps = this.dataService.step++;
    if(steps == 3){
      this.dataService.step=3;
      
    }
   console.log(steps) 
  }
  decrement(){
    let previous = this.dataService.step--;
    if(previous == 1){
      this.dataService.step = 1
    }
  }
  
}
