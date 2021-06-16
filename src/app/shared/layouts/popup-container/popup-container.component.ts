import {
    Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild
} from '@angular/core';
import { DxPopupComponent, DxScrollViewComponent } from 'devextreme-angular';


@Component({
    selector: 'app-popup-container',
    templateUrl: './popup-container.component.html',
    styleUrls: ['./popup-container.component.scss']
})
export class PopupContainerComponent implements OnInit {
    @ViewChild('popup', { static: false }) popup: DxPopupComponent;
    @ViewChild('scrollView', { static: false }) scrollView: DxScrollViewComponent;
    @Input() footerTemplate: TemplateRef<any>;
    @Input() headerTemplate: TemplateRef<any>;

    private _title: string;
    @Output() titleChange = new EventEmitter();
    private _visible: boolean = false;
    @Output() visibleChange = new EventEmitter();

    @Input()
    get visible(): boolean {
        return this._visible;
    }
    set visible(value: boolean) {
        this._visible = value;
        this.visibleChange.emit(value);
    }
    @Input()
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
        this.titleChange.emit(value);
    }
    constructor() {
    }

    ngOnInit() {
    }
    onShown() {
        setTimeout(() => {
            this._visible = false;
        }, 3000);
    }

}
