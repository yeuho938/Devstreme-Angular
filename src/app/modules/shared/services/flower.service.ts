import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flower } from '../models';
import { random } from 'lodash';
import { randomFlowerById, randomFlowers } from 'src/app/data/admin/flower.mock';
import { LoadParamModel, LoadResultModel } from '../models/Load';
@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor() { }
  getFlowers(param: LoadParamModel): Observable<LoadResultModel<Flower[]>> {
    return of({
      data: randomFlowers(30),
      totalCount: random(50, 100)
    });
  }
  getFlowerById(param: number): Observable<Flower> {
    return of(randomFlowerById(param));
  }
  deleteFlower(param: number): Observable<boolean> {
    return of(true);
  }
  saveFlower(param: Flower): Observable<boolean> {
    return of(true);
  }
}
