import { Component, OnInit,ViewChild,Input, ComponentRef} from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Detail4Component } from '../detail-4/detail-4.component';
import { Detail5Component } from '../detail-5/detail-5.component';
import { Subscription } from 'rxjs';
import { DetailsDirective } from '../details.directive';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.css']
  
})
export class Formspacecomponent{
  
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  public detailComponents = [
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
    Detail5Component,
  ];

  receivedData!: string;

  constructor(private dataService: DataService) {}

  public i = -1;
  currentComponent: any = [];
  sub!: Subscription;
  public next(): void {
    if (this.i <= this.detailComponents.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i].name
      );
    } else {
    }
  }

  ngOnInit() {}

  details: Data[] = [
    {
      name: 'Personal Details',
      isCompleted: false,
      isProgress: true,
      component: Detail1Component,
      data: [],
    },
    {
      name: 'Address Proof',
      isCompleted: false,
      isProgress: true,
      component: Detail2Component,
      data: [],
    },
    {
      name: 'Payment',
      isCompleted: false,
      isProgress: true,
      component: Detail3Component,
      data: [],
    },
  ];
detailComponent(currentcomponent:any,data: string){
  this.receivedData = '';
  let viewDetailContainerRef = this.appDetails.viewContainerRef;
  viewDetailContainerRef.clear();
  let componentRef : ComponentRef<any> = viewDetailContainerRef.createComponent(currentcomponent);
  componentRef.instance.data = data;
  componentRef.instance.output.subscribe((results : string)=>{
    this.receivedData = results;
    console.log(this.receivedData);
  })
}
}
