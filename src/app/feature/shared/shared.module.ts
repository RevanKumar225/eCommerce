import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    FooterMenuComponent,
    RootComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
