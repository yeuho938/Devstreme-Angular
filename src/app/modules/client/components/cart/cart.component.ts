import {Component, OnInit} from '@angular/core';
import {Cart} from "../../models/cart.class";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: Cart[] = [{
    "id": 1,
    "name": "Love YZ",
    "image": "https://dienhoatuoihanoi.com/wp-content/uploads/2019/05/bo-hoa-hong-tang-sinh-nhat-60.png",
    "price": 100000,
    "quantity": 12
  }, {
    "id": 2,
    "name": "Sky",
    "image": "https://dichoihue.com/wp-content/uploads/2021/01/gio-hoa-dep-min-680x486.png",
    "price": 300000,
    "quantity": 12
  }, {
    "id": 3,
    "name": "Moon",
    "image": "https://inhat.vn/ha-noi/wp-content/uploads/2019/10/Yes-Flower-min.jpg",
    "price": 180000,
    "quantity": 12
  }];
    constructor() {
  }

  ngOnInit(): void {
  }
}
