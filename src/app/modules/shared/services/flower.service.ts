import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flower } from '../models';
import {random} from 'lodash';
import { randomFlowers } from 'src/app/data/admin/flower.mock';
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
}
