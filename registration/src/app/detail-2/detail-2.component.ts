import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Formspacecomponent } from '../formspace/formspace.component';
import { Subject } from 'rxjs';
import { IBtnDetails } from '../details.directive';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-detail-2',
  templateUrl: './detail-2.component.html',
  styleUrls: ['./detail-2.component.css']
})
export class Detail2Component {
  @Input('data')
  data!: any;
  @Input('receivedData')
  receivedData!: any;
  @Output() btnClick = new EventEmitter<any>();
  private output = new Subject<any>();

  btnDetail2: IBtnDetails[] = [
    {
      name: 'D2',
      key: 'nxt',
      data: [],
    },
  ];

  Detail2Form = this.fb.group({
    address: ['', [Validators.required]],
  });

  constructor(private formsp: Formspacecomponent, private fb: FormBuilder) {}

  ngOnInit() {
    // console.log(this.receivedData);
    this.Detail2Form.patchValue(this.receivedData);
  }

  get address() {
    return this.Detail2Form?.get('address');
  }

  next() {
    this.btnDetail2[0].data = this.Detail2Form.value;
    if (this.Detail2Form.valid) {
      this.formsp.next();
      this.output.next(this.btnDetail2[0].data);
      // this.btnClick.emit(this.Detail1Data);
      // console.log(this.Detail1Data);
    } else {
      alert('please fill all the details');
    }
  }

  back() {
    this.formsp.back();
  }

}
