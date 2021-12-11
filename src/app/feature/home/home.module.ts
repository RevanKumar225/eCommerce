import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule
  ]
})
export class HomeModule { }
