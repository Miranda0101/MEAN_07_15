import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // products: any[] = [];
  constructor(private productService: ProductService){
    // this.products = this.productService.getProducts();
  }
  addNewProduct(){
    this.productService.addProduct({id:'4', name:'Shampoo', quantity:'40'})
  }
}
