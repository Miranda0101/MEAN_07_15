import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any[] = [];
  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }
}
