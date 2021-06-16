import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  types: string[] = ["spline", "stackedspline", "fullstackedspline"];

  constructor() { }

  architecturesInfo: any[]  = [{
    year: 1997,
    flowers: 263,
    orders: 226,
    users: 10
  }, {
    year: 1999,
    flowers: 169,
    orders: 256,
    users: 66
  }, {
    year: 2001,
    flowers: 57,
    orders: 257,
    users: 143
  }, {
    year: 2003,
    flowers: 0,
    orders: 163,
    users: 127
  }, {
    year: 2005,
    flowers: 0,
    orders: 103,
    users: 36
  }, {
    year: 2007,
    flowers: 0,
    orders: 91,
    users: 3
  }];
  ngOnInit(): void {
  }

}
