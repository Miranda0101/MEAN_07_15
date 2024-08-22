import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'inclass';
  numObs = new Observable<number>((subscriber)=>{
    console.log('Execution starts');
    subscriber.next(Math.random() * 10);
    subscriber.complete();
  });
  // numSub = new Subject<number>();
  numSub = new BehaviorSubject<number>(0);
  constructor(private route: Router){}
  ngOnInit(): void {
      // First observer
      this.numObs.subscribe(val => console.log("Observer 1: ", val));
      // Second observer
      this.numObs.subscribe(val => console.log("Observer 2: ", val))

      this.numSub.subscribe(val => console.log("1 Subscribe to subject: ", val));
      this.numSub.next(Math.random() * 10);
      this.numSub.subscribe(val => console.log("2 Subscribe to subject: ", val));
      
  }
  navigateProduct(){
    // do validation logic
    this.route.navigate(['product']);
  }
}
