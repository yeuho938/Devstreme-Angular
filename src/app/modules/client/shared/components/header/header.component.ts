import { Component, OnInit } from '@angular/core';
import {USER_MENU} from "../../user_menu";

@Component({
  selector: 'app-header-client',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemMenu = USER_MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
