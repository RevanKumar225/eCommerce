import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  getDashBoardImages(): any[] {
    return [
      { ImagePath: 'assets/dashboard/head_img.png' },
      { ImagePath: 'assets/dashboard/head_imgPromo2.png' },
    ]
  }

  getProductsLists(): any[] {
    return [{ id: 1, name: 'Bread', price: 80, image: 'assets/StaticImg/StProducts/p1.jpg', Category: "BAS" },
    { id: 2, name: 'Brown Bread', price: 54, image: 'assets/StaticImg/StProducts/p2.jpg', Category: "BAS" },
    { id: 3, name: 'Spreads', price: 77, image: 'assets/StaticImg/StProducts/p3.jpg', Category: "BAS" },
    { id: 4, name: 'Brown Spreads', price: 13, image: 'assets/StaticImg/StProducts/p4.jpg', Category: "BAS" },
    { id: 5, name: 'Soprole1', price: 63, image: 'assets/StaticImg/StProducts/clientProduct1.png', Category: "BAS" },
    { id: 11, name: 'Sweet Milk', price: 13, image: 'assets/StaticImg/StProducts/a1.jpg', Category: "FLM" },
    { id: 12, name: 'Salt Milk', price: 89, image: 'assets/StaticImg/StProducts/a2.jpg', Category: "FLM" },
    { id: 13, name: 'Toned Milk', price: 24, image: 'assets/StaticImg/StProducts/a3.jpg', Category: "FLM" },
    { id: 14, name: 'Badam Milk', price: 178, image: 'assets/StaticImg/StProducts/a4.jpg', Category: "FLM" },
    { id: 21, name: 'Fresh Milk', price: 376, image: 'assets/StaticImg/StProducts/b1.jpg', Category: "FRM" },
    { id: 22, name: 'Milk', price: 234, image: 'assets/StaticImg/StProducts/b2.jpg', Category: "FRM" },
    { id: 23, name: 'Pure Milk', price: 134, image: 'assets/StaticImg/StProducts/b3.jpg', Category: "FRM" },
    { id: 24, name: 'Vast Milk', price: 54, image: 'assets/StaticImg/StProducts/b4.jpg', Category: "FRM" },
    { id: 31, name: 'Powder', price: 63, image: 'assets/StaticImg/StProducts/c1.jpg', Category: "PRO" },
    { id: 32, name: 'Milk Powder', price: 23, image: 'assets/StaticImg/StProducts/c2.jpg', Category: "PRO" },
    { id: 33, name: 'Bread Powder', price: 45, image: 'assets/StaticImg/StProducts/c3.jpg', Category: "PRO" },
    { id: 34, name: 'Spreads Powder', price: 97, image: 'assets/StaticImg/StProducts/c4.jpg', Category: "PRO" },
    { id: 41, name: 'Yoghurt', price: 87, image: 'assets/StaticImg/StProducts/y1.jpg', Category: "YOG" },
    { id: 42, name: 'Yoghurt1', price: 23, image: 'assets/StaticImg/StProducts/y2.jpg', Category: "YOG" },
    { id: 43, name: 'Yoghurt2', price: 57, image: 'assets/StaticImg/StProducts/y3.jpg', Category: "YOG" },
    { id: 44, name: 'Yoghurt3', price: 12, image: 'assets/StaticImg/StProducts/y4.png', Category: "YOG" },
    ]
  }

  getMostLovedItems(): any[] {
    return [
      { id: 1, name: 'Bread', price: 80, image: 'assets/StaticImg/StProducts/p1.jpg', Category: "BAS" },
      { id: 3, name: 'Spreads', price: 77, image: 'assets/StaticImg/StProducts/p3.jpg', Category: "BAS" },
      { id: 4, name: 'Brown Spreads', price: 13, image: 'assets/StaticImg/StProducts/p4.jpg', Category: "BAS" }]
  }

  getMonthlySpecials(): any[] {
    return [
      { id: 21, name: 'Fresh Milk', price: 376, image: 'assets/StaticImg/StProducts/b1.jpg', Category: "FRM" },
      { id: 22, name: 'Milk', price: 234, image: 'assets/StaticImg/StProducts/b2.jpg', Category: "FRM" },
      { id: 34, name: 'Spreads Powder', price: 97, image: 'assets/StaticImg/StProducts/c4.jpg', Category: "PRO" },
    ]
  }

  getMostlyRecommended(): any[] {
    return [
      { id: 1, name: 'Bread', price: 80, image: 'assets/StaticImg/StProducts/p1.jpg', Category: "BAS" },
      { id: 14, name: 'Badam Milk', price: 178, image: 'assets/StaticImg/StProducts/a4.jpg', Category: "FLM" },
      { id: 22, name: 'Milk', price: 234, image: 'assets/StaticImg/StProducts/b2.jpg', Category: "FRM" },
    ]
  }


}
