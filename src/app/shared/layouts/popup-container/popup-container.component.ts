import {Component,EventEmitter,Input,OnInit, Output, TemplateRef, ViewChild
} from '@angular/core';
import {DxPopupComponent, DxScrollViewComponent} from 'devextreme-angular';


@Component({
    selector: 'app-popup-container',
    templateUrl: './popup-container.component.html',
    styleUrls: ['./popup-container.component.scss']
})
export class PopupContainerComponent implements OnInit {
    @ViewChild('popup', {static: false}) popup: DxPopupComponent;
    @ViewChild('scrollView', {static: false}) scrollView: DxScrollViewComponent;
    @Input() footerTemplate: TemplateRef<any>;
    @Input() headerTemplate: TemplateRef<any>;

    private _visible: boolean = false;
    @Input()
    get visible(): boolean {
        return this._visible;
    }
    @Output() visibleChange = new EventEmitter();

    set visible(value: boolean) {
        this._visible = value;
        this.visibleChange.emit(value);
    }

    constructor() {
    }

    ngOnInit() {
    }
  
}
