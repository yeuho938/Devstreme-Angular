import { Component, OnInit, ViewChild } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { PopoverConfirmBoxComponent } from 'src/app/modules/shared/components/popover-confirm-box/popover-confirm-box.component';
import { Flower } from 'src/app/modules/shared/models';
import { LoadParamModel } from 'src/app/modules/shared/models/Load';
import { FlowerService } from 'src/app/modules/shared/services';
import { AppNotify } from 'src/app/utilities';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  @ViewChild('deleteDetailConfirmPopover') deleteDetailConfirmPopover: PopoverConfirmBoxComponent;

  constructor(public flowerService: FlowerService) {
  }
  dataSource: DataSource;
  dataFlower: Flower;
  selectedId: number;
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
  onDeleteFlower(id: any, e: MouseEvent) {
    this.selectedId = id;
    if (this.deleteDetailConfirmPopover) {
        this.deleteDetailConfirmPopover.show(e.currentTarget);
    }
}
  createFlower(){
    this.dataFlower = new Flower();
    this.isOpenFlowerDetailPopup = true;
  }
  deleteFlower() {
    this.isProcessing = true;
    this.flowerService.deleteFlower(this.selectedId).subscribe(() => {
        AppNotify.success('Deleted success');
        this.getFlowers();
        this.isProcessing = false;
    }, (error) => {
        AppNotify.error();
        this.isProcessing = false;
    });
}
}
