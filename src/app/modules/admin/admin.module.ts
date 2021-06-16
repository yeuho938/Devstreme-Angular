import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ChartComponent } from './components/chart/chart.component';
import { SharedModule } from '../../shared/shared.module';
import {OrderDetailComponent, OrdersComponent} from "../shared/components";
import {DashboardComponent, EditFlowersComponent, FlowersComponent, NavigationComponent} from "./components";
import { DxDataGridModule, DxTemplateModule, 
         DxSelectBoxModule, DxChartModule, 
         DxPopupModule, DxFormModule, 
         DxTextBoxModule, DxNumberBoxModule, 
         DxDateBoxModule, DxValidatorModule, 
         DxValidationGroupModule
} from 'devextreme-angular';
const COMPONENTS = [
  DashboardComponent,
  FlowersComponent,
  EditFlowersComponent,
  EditFlowersComponent,
  NavigationComponent
];
const DEVEXTREME_MODULES = [
  DxTemplateModule,DxDataGridModule,
  DxChartModule,DxSelectBoxModule,
  DxTextBoxModule,DxFormModule,
  DxNumberBoxModule,DxDateBoxModule,
  DxValidatorModule,DxValidationGroupModule, 
  DxPopupModule
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
    path: 'flower/:id',
    component: EditFlowersComponent,
  },
  {
    path: 'admin/order',
    component: OrdersComponent,
  },
  {
    path: 'order/:id',
    component: OrderDetailComponent
  }
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
   ...DEVEXTREME_MODULES
  ]
})
export class AdminModule {
}
