import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {FlowerService, UserService, OrderService} from "../modules/shared/services";
import {CartService} from "../modules/client/services/cart.service";
import {DxAccordionModule, DxButtonModule, 
        DxContextMenuModule, DxDataGridModule, 
        DxDrawerModule, DxFormModule, 
        DxListModule, DxLoadIndicatorModule, 
        DxLoadPanelModule, 
        DxMenuModule, DxPopupModule, DxScrollViewModule, 
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
import {PopupContainerComponent} from './layouts/popup-container/popup-container.component';

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
  SideNavigationMenuComponent,
  PopupContainerComponent
]
const DEVEXTREME_MODULES = [
  DxButtonModule,DxiItemModule,
  DxMenuModule,DxAccordionModule,
  DxDataGridModule,DxToolbarModule,
  DxListModule,DxContextMenuModule,
  DxTreeViewModule,DxFormModule,
  DxLoadIndicatorModule,DxDrawerModule,
  DxScrollViewModule, DxPopupModule,DxLoadPanelModule
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
