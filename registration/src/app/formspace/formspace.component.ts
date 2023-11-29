import { Component, OnInit,ViewChild,Input, ComponentRef} from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { Detail1Component } from '../detail-1/detail-1.component';
import { Detail2Component } from '../detail-2/detail-2.component';
import { Detail3Component } from '../detail-3/detail-3.component';
import { Detail4Component } from '../detail-4/detail-4.component';
import { Subscription } from 'rxjs';
import { DetailsDirective } from '../details.directive';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-formspace',
  templateUrl: './formspace.component.html',
  styleUrls: ['./formspace.component.css']
  
})
export class Formspacecomponent{
  
  @ViewChild(DetailsDirective)
  appDetails!: DetailsDirective;

  receivedData: any[] = [];
  message: any;
  messages: any;

  public detailComponents = [
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component,
  ];

  // receivedData!: string;

  constructor(private dataService: DataService) {}

  public i = 0;
  currentComponent: any = [];
  sub!: Subscription;
  public next() :void {
    if (this.i <= this.detailComponents.length) {
      this.i += 1;
      this.detailComponent(
        this.details[this.i].component,
        this.details[this.i].name
      );
    }
  }
  public back() : void{
    this.i -= 1;
    this.backDetailComponent(
      this.details[this.i].component,
      this.details[this.i]
    );
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.detailComponent(this.details[this.i].component, this.details[this.i]);
  }

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
    {
      name: 'Submitted',
      isCompleted: false,
      isProgress: true,
      component: Detail4Component,
      data: [],
    },
  ];
  detailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    componentRef.instance.output.subscribe((results: any) => {
      this.details[this.i - 1].data = results;
      console.log(this.details);
    });
  }

  backDetailComponent(currentComponent: any, data: any) {
    let viewDetailContainerRef = this.appDetails.viewContainerRef;
    viewDetailContainerRef.clear();
    let componentRef: ComponentRef<any> =
      viewDetailContainerRef.createComponent(currentComponent);
    componentRef.instance.data = data;
    componentRef.instance.receivedData = this.details[this.i].data;
    console.log(this.details[this.i].data);
  }

  receivedMessage($event: any) {
    this.message = $event;
    this.messages = this.message[0].name;
    console.log(this.message);
  }
}
