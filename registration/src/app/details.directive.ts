import { Directive, EventEmitter, Output, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDetails]'
})
export class DetailsDirective {
  @Output() btnclick = new EventEmitter<IBtnDetails>();

  constructor(public viewContainerRef: ViewContainerRef) { }

}
export interface IBtnDetails {
  name : string;
  key : string;
  data : any;
}