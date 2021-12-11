import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  searchModel:string="";
  message:any={};
  WLCount:any={};
  constructor() { }

  ngOnInit(): void {
  }

  OnOpenBar(){}

  viewProfile(){}

  onLogout(){}

}
