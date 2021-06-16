import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Flower } from 'src/app/modules/shared/models';
import { FlowerService } from 'src/app/modules/shared/services';

@Component({
  selector: 'app-edit-flowers',
  templateUrl: './edit-flowers.component.html',
  styleUrls: ['./edit-flowers.component.scss']
})
export class EditFlowersComponent implements OnInit {

  private _visible: boolean = false;
  editFlower: Flower = new Flower();
  @Input() selectedFlower: Flower = new Flower();
  //
  @Input()
  get visible(): boolean {
      return this._visible;
  }

  set visible(value: boolean) {
      this._visible = value;
      this.visibleChange.emit(value);
  }

  @Output() visibleChange = new EventEmitter();
  constructor( public flowerService: FlowerService) {
  }
  
  ngOnInit(): void {
    if (this.selectedFlower.id) {
      this.flowerService.getFlowerById(this.selectedFlower.id).subscribe((result) => {
          this.editFlower = result;
      });
    }
  }
}
