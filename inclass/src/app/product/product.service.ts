import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {id: '1', name:'Hammer', quantity:'10'},
    {id: '2', name:'Nails', quantity:'100'},
    {id: '3', name:'Scissors', quantity:'5'}
  ];
  constructor() { }
  getProducts(){
    return this.products;
  }
  addProduct(product: any){
    this.products.push(product);
    console.log(this.products)
  }
}
