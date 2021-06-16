import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edit-flowers',
  templateUrl: './edit-flowers.component.html',
  styleUrls: ['./edit-flowers.component.scss']
})
export class EditFlowersComponent implements OnInit {

  private _visible: boolean = true;

  //
  @Input()
  get visible(): boolean {
      return this._visible;
  }

  set visible(value: boolean) {
      this._visible = value;
      this.visibleChange.emit(value);
  }

  //
  @Output() visibleChange = new EventEmitter();
  constructor() {
  }
  
  ngOnInit(): void {
    console.log('yeu');
  console.log(this._visible);
  }
}
