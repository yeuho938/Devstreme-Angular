import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ChartComponent } from './components/chart/chart.component';
import { SharedModule } from '../../shared/shared.module';
import {OrderDetailModule, OrdersModule} from "../shared/components";
import {DashboardComponent, EditFlowersComponent, FlowersComponent,OrdersAdminComponent} from "./components";
import { DxDataGridModule, DxTemplateModule, 
         DxSelectBoxModule, DxChartModule, 
         DxPopupModule, DxFormModule, 
         DxTextBoxModule, DxNumberBoxModule, 
         DxDateBoxModule, DxValidatorModule, 
         DxValidationGroupModule,
         DxButtonModule
} from 'devextreme-angular';
const COMPONENTS = [
  DashboardComponent,
  FlowersComponent,
  EditFlowersComponent,
  EditFlowersComponent,
  OrdersAdminComponent
];
const DEVEXTREME_MODULES = [
  DxTemplateModule,DxDataGridModule,
  DxChartModule,DxSelectBoxModule,
  DxTextBoxModule,DxFormModule,
  DxNumberBoxModule,DxDateBoxModule,
  DxValidatorModule,DxValidationGroupModule, 
  DxPopupModule,DxButtonModule
];

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'admin/dashboard', 
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin/flower',
    component: FlowersComponent,
  },
  {
    path: 'admin/order',
    component: OrdersAdminComponent,
  },
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ChartComponent
  ],
  imports: [
    CommonModule,
    OrdersModule,
    OrderDetailModule,
    RouterModule.forRoot(routes),
    SharedModule,
   ...DEVEXTREME_MODULES
  ]
})
export class AdminModule {
}
