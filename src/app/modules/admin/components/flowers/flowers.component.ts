import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { LoadParamModel } from 'src/app/modules/shared/models/Load';
import { FlowerService } from 'src/app/modules/shared/services';
import { Flower } from "../../../shared/models";

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {

  constructor(public flowerService: FlowerService) {
  }
  dataSource: DataSource;
  isProcessing: any;
  isOpenFlowerDetailPopup: boolean = false;

  flowers: Flower[] = [{
    "id": 1,
    "name": "Love YZ",
    "description": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "image": "https://dienhoatuoihanoi.com/wp-content/uploads/2019/05/bo-hoa-hong-tang-sinh-nhat-60.png",
    "price": 100000,
    "remainingStock": 12
  }, {
    "id": 2,
    "name": "Sky",
    "description": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "image": "https://dichoihue.com/wp-content/uploads/2021/01/gio-hoa-dep-min-680x486.png",
    "price": 300000,
    "remainingStock": 12
  }, {
    "id": 3,
    "name": "Moon",
    "description": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "image": "https://inhat.vn/ha-noi/wp-content/uploads/2019/10/Yes-Flower-min.jpg",
    "price": 180000,
    "remainingStock": 12
  }, {
    "id": 4,
    "name": "John",
    "description": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "image": "https://inhat.vn/ha-noi/wp-content/uploads/2019/10/Yes-Flower-min.jpg",
    "price": 150000,
    "remainingStock": 12
  }, {
    "id": 5,
    "name": "John",
    "description": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "image": "https://sayhi.vn/blog/wp-content/uploads/2019/08/shop-hoa-dep-ha-noi-38-Degree-Flower-min.jpg",
    "price": 200000,
    "remainingStock": 12
  }
  ];

  ngOnInit(): void {
    this.getFlowers();
  }
  onFlowerDetail() {
    this.isProcessing = true;
    this.isOpenFlowerDetailPopup = true;
    alert(this.isOpenFlowerDetailPopup);
    console.log('yeuuu');
  }
  onDeleteBooking(id: number, e) {

  }
  getFlowers() {
    this.dataSource = new DataSource({
      load: (loadOptions) => {
        const loadParams = new LoadParamModel(loadOptions);
        return this.flowerService.getFlowers(loadParams).toPromise();
    }
    });
  }
}
