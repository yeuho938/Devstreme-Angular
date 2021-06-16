import { CommonModule } from '@angular/common';
import {Component, NgModule} from '@angular/core';
import { DxDrawerModule, DxScrollViewModule } from 'devextreme-angular';
import { ClientModule } from 'src/app/modules/client/client.module';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-page-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultPageComponent {
}
@NgModule({
  imports: [DxDrawerModule, SharedModule, DxScrollViewModule, CommonModule, ClientModule],
exports: [ DefaultPageComponent ],
declarations: [ DefaultPageComponent ]
})
export class DefaultPageModule { }