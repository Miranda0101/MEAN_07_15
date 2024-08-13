import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'inclass';
  messageString =  "Welcome to Angular"
  arr=[1,2,3,4,5]
  constructor(private route: Router){}
  navigateProduct(){
    // do validation logic
    this.route.navigate(['product']);
  }
}
