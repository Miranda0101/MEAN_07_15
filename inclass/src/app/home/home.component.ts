import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy{
  products: any[] = [];
  parentData = 'From Parent';
  constructor(private productService: ProductService){
    console.log('construcor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges invoked')
  }
  ngOnInit(){
    console.log('ngOnInit invoked')
    this.products = this.productService.getProducts();
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck ')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
      alert('You are about to leave home page!')
  }
}
