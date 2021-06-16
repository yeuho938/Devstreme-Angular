import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {FlowerService, UserService, OrderService} from "../modules/shared/services";
import {CartService} from "../modules/client/services/cart.service";
import {DxAccordionModule, DxButtonModule, 
        DxContextMenuModule, DxDataGridModule, 
        DxDrawerModule, DxFormModule, 
        DxListModule, DxLoadIndicatorModule, 
        DxMenuModule, DxScrollViewModule, 
        DxToolbarModule, DxTreeViewModule
} from "devextreme-angular";
import {DxiItemModule} from "devextreme-angular/ui/nested";
import {RouterModule} from "@angular/router";
import { ChangePasswordFormComponent,
        CreateAccountFormComponent,
        HeaderComponent,
        ResetPasswordFormComponent,
        UserPanelComponent,
        LoginFormComponent, 
        SideNavigationMenuComponent     
} from './components';
const PROVIDERS = [
  FlowerService,
  UserService,
  OrderService,
  CartService
]
const COMPONENTS = [
  ChangePasswordFormComponent,
  CreateAccountFormComponent,
  HeaderComponent,
  ResetPasswordFormComponent,
  UserPanelComponent,
  LoginFormComponent,
  SideNavigationMenuComponent
]
const DEVEXTREME_MODULES = [
  DxButtonModule,DxiItemModule,
  DxMenuModule,DxAccordionModule,
  DxDataGridModule,DxToolbarModule,
  DxListModule,DxContextMenuModule,
  DxTreeViewModule,DxFormModule,
  DxLoadIndicatorModule,DxDrawerModule,
  DxScrollViewModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
        CommonModule,
        RouterModule,
        ...DEVEXTREME_MODULES
    ],
  providers:[
    ...PROVIDERS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule{}
