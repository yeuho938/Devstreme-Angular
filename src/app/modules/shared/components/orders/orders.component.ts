import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppNotify } from 'src/app/utilities';
import { Order } from '../../models';
import { LoadParamModel } from '../../models/Load';
import { OrderService } from '../../services';
import { PopoverConfirmBoxComponent } from '../popover-confirm-box/popover-confirm-box.component';
import { OrderDetailModule } from './order-detail/order-detail.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @ViewChild('deleteDetailConfirmPopover') deleteDetailConfirmPopover: PopoverConfirmBoxComponent;

  constructor(public orderService: OrderService) {
  }
  dataSource: DataSource;
  dataOrder: Order;
  selectedId: number;
  isProcessing: any;
  isOpenOrderDetailPopup: boolean = false;

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.dataSource = new DataSource({
      load: (loadOptions) => {
        const loadParams = new LoadParamModel(loadOptions);
        return this.orderService.getOrders(loadParams).toPromise();
    }
    });
  }
  onOrderDetail(param: Order) {
    this.isProcessing = true;
    this.isOpenOrderDetailPopup = true;
    this.dataOrder = param;
  }
  onDeleteOrder(id: any, e: MouseEvent) {
    this.selectedId = id;
    if (this.deleteDetailConfirmPopover) {
        this.deleteDetailConfirmPopover.show(e.currentTarget);
    }
}

  deleteOrder() {
    this.isProcessing = true;
    this.orderService.deleteOrder(this.selectedId).subscribe(() => {
        AppNotify.success('Deleted success');
        this.getOrders();
        this.isProcessing = false;
    }, (error) => {
        AppNotify.error();
        this.isProcessing = false;
    });
}

}

@NgModule({
  imports: [
    CommonModule, SharedModule,DxDataGridModule, OrderDetailModule
  ],
  declarations: [OrdersComponent],
  exports: [OrdersComponent]
})
export class OrdersModule { }
