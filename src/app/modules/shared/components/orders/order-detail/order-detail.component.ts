import { CommonModule } from '@angular/common';
import {Component, NgModule, OnInit} from '@angular/core';
@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }

}
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [OrderDetailComponent],
  exports: [OrderDetailComponent]
})
export class OrderDetailModule { }
