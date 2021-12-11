import { Component, OnInit } from '@angular/core';
import { DashboardService } from './_service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrayimage: any = [];
  productsList: any = [];
  flavouredItems:any=[];
  monthSpecialItem:any=[];
  recommendedItems:any=[];
  productInDetail: any = {};

  constructor(private _dashboardService: DashboardService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.arrayimage = this._dashboardService.getDashBoardImages();
    this.productsList = this._dashboardService.getProductsLists();
    this.flavouredItems = this._dashboardService.getMostLovedItems();
    this.monthSpecialItem = this._dashboardService.getMonthlySpecials();
    this.recommendedItems = this._dashboardService.getMostlyRecommended();
  }

  ProductDetails(objId: any) {
    var productInfo=this.productsList.filter((e: { id: any; }) => e.id == objId);
    this.productInDetail = JSON.stringify(productInfo)
    if (productInfo.length != 0) {
        localStorage.setItem('SelectedProduct', this.productInDetail)
        // this.CurrentClass.router.navigate(['/ProductDetails'])
    }
  }
}
