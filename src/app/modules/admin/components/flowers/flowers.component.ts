import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Flower } from 'src/app/modules/shared/models';
import { LoadParamModel } from 'src/app/modules/shared/models/Load';
import { FlowerService } from 'src/app/modules/shared/services';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(public flowerService: FlowerService) {
  }
  dataSource: DataSource;
  dataFlower: Flower;
  isProcessing: any;
  isOpenFlowerDetailPopup: boolean = false;

  ngOnInit(): void {
    this.getFlowers();
  }
  getFlowers() {
    this.dataSource = new DataSource({
      load: (loadOptions) => {
        const loadParams = new LoadParamModel(loadOptions);
        return this.flowerService.getFlowers(loadParams).toPromise();
    }
    });
  }
  onFlowerDetail(param: Flower) {
    this.isProcessing = true;
    this.isOpenFlowerDetailPopup = true;
    this.dataFlower = param;
    console.log(this.isOpenFlowerDetailPopup)
  }
  onDeleteBooking(id: number, e) {

  }
  createFlower(){
    this.dataFlower = new Flower();
    this.isOpenFlowerDetailPopup = true;
  }
}
