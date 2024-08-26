import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  debounceTime,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  Subject,
  take,
  takeUntil,
  tap,
  throttle,
  throttleTime,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'inclass';
  numObs = new Observable<number>((subscriber) => {
    console.log('Execution starts');
    subscriber.next(Math.random() * 10);
    subscriber.complete();
  });
  // numSub = new Subject<number>();
  numSub = new BehaviorSubject<number>(0);
  constructor(private route: Router) {}
  ngOnInit(): void {
    // First observer
    // this.numObs.subscribe(val => console.log("Observer 1: ", val));
    // // Second observer
    // this.numObs.subscribe(val => console.log("Observer 2: ", val))

    // this.numSub.subscribe(val => console.log("1 Subscribe to subject: ", val));
    // this.numSub.next(Math.random() * 10);
    // this.numSub.subscribe(val => console.log("2 Subscribe to subject: ", val));

    // Creation operators
    const ofObs = of([1, 2, 3]);
    ofObs.subscribe((val) => console.log('of operator: ', val));
    const fromObs = from([1, 2, 3]);
    // fromObs.subscribe((val) => console.log('from operator: ', val));

    // Pipeable Operators
    fromObs
      .pipe(tap((val) => console.log('in tap: ', val * 2)))
      .subscribe((val) => console.log('in subscription', val));
  }
  navigateProduct() {
    // do validation logic
    this.route.navigate(['product']);
  }
  ngAfterViewInit(): void {
    const btn = document.querySelector<HTMLButtonElement>('#btn');

    if (btn) {
      fromEvent(btn, 'click')
        .pipe(throttleTime(3000))
        .subscribe((val) => console.log('button clicked:', val));
    }
    const obs2 = fromEvent(document,'click');
    // interval(1000)
    //   .pipe(
    //     take(10)
    //     // takeUntil(obs2)
    //   )
    //   .subscribe((val) => console.log('taking until: ', val));

    const input = document.querySelector('#userInput');
    if (input) {
      fromEvent(input, 'input')
        // .pipe(debounceTime(5000))
        .subscribe((event) =>
          console.log((<HTMLInputElement>event.target).value)
        );
    }
  }
}
