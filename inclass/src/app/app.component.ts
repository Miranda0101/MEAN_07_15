import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
import { decrement, increment, reset } from './ngrx/action';
import { selectCount } from './ngrx/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  constructor(private route: Router, private store: Store, private cdr: ChangeDetectorRef) {}
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
    this.cdr.detectChanges(); // Manaually trigger the change detection cycle
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

  // ngrx
  countObs = this.store.select(selectCount);
  increment(){
    this.store.dispatch(increment());
  }
  decrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }
}
