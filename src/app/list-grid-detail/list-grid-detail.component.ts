import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grid-detail',
  templateUrl: './list-grid-detail.component.html',
  styleUrls: ['./list-grid-detail.component.css']
})
export class ListGridDetailComponent implements OnInit {
  gridView: boolean = false;
  listView: boolean = false;
  productData: Array<any>= [];
  finalProduct: Array<any>= [];
  prices = ['All','100-500', '500-1000', '1000-1500', '1500-2000']
  constructor() { }

  ngOnInit(): void {
    this.gridView = true;
    this.productList();
  }
  filterByPrice(event: any) {
    if(event.target.value == 'All'){
      this.productList();
    }
    else {
      let arrayPrice = event.target.value.split('-');
    this.productData=[];
    this.productData = this.finalProduct.filter(data=>data.Price>=Number(arrayPrice[0]) && data.Price<=Number(arrayPrice[1]));
    }
   
  }
  listViewProduct(){
    this.gridView= false;
    this.listView= true;
    this.productList();
  }
  gridViewProduct(){
    this.gridView= true;
    this.listView= false;
    this.productList();
  }
  productList() {
    for (let i = 1; i <= 40; i++) {
      const productObject = {
        Product: '',
        Price: 0
      }
      productObject.Product = 'Product' + ' ' + i;
      productObject.Price = Math.floor(Math.random() * 2000) + 1;
      this.productData.push(productObject);
  }
    this.finalProduct = this.productData;
  }

}
