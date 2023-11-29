import { Component } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-detail-4',
  templateUrl: './detail-4.component.html',
  styleUrls: ['./detail-4.component.css']
})
export class Detail4Component {
  private output = new Subject<any>();
}
