import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { random } from 'lodash';
import { randomOrderById, randomOrders } from 'src/app/data/client/order.mock';
import { Order } from '../models';
import { LoadParamModel, LoadResultModel } from '../models/Load';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  getOrders(param: LoadParamModel): Observable<LoadResultModel<Order[]>> {
    return of({
      data: randomOrders(30),
      totalCount: random(50, 100)
    });
  }
  getOrderById(param: number): Observable<Order> {
    return of(randomOrderById(param));
  }
  deleteOrder(param: number): Observable<boolean> {
    return of(true);
  }
}


