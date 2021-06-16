import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import { SharedModule } from '../../shared/shared.module';
import {RouterModule, Routes} from "@angular/router";
import {OrderDetailComponent, OrdersComponent} from "../shared/components";
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {
        CartComponent,CheckoutComponent,
        ContentComponent,FlowerDetailComponent,
        FlowersComponent,HomepageComponent,ListFlowersComponent
} from "./components";
import {
        DxMenuModule,DxSelectBoxModule,
        DxCheckBoxModule,DxButtonModule,
        DxToolbarModule,DxGalleryModule, 
        DxDataGridModule, DxListModule, 
        DxTextBoxModule, DxFormModule, 
        DxNumberBoxModule, DxDateBoxModule, 
        DxValidatorModule, DxValidationGroupModule, DxPopupModule
} from 'devextreme-angular';

const COMPONENTS = [
  CartComponent,
  FlowersComponent,
  CheckoutComponent,
  ListFlowersComponent,
  FlowerDetailComponent,
  HomepageComponent,
  ContentComponent,
  FooterComponent,
  HeaderComponent,
];
const DEVEXTREME_MODULES = [
  DxMenuModule,DxSelectBoxModule,
  DxCheckBoxModule, DxButtonModule,
  DxToolbarModule,DxGalleryModule,
  DxDataGridModule,DxListModule,
  DxTextBoxModule,DxFormModule,
  DxNumberBoxModule,DxDateBoxModule,
  DxValidatorModule,DxValidationGroupModule,
  DxPopupModule
];
const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'flower',
    component: ListFlowersComponent,
  },
  {
    path: 'flower/:id',
    component: FlowerDetailComponent,
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'order',
    component: OrdersComponent,
  },
  {
    path: 'order/:id',
    component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ...DEVEXTREME_MODULES
  ]
})
export class ClientModule {
}
