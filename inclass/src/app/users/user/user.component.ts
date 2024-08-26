import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  usersList: User[] = [];
  subscriptions: Subscription[] = [];
  constructor(
    private users: UserService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.subscriptions.push(
      this.users.getUsers().subscribe((val) => {
        this.usersList = val;
        console.log(this.usersList);
      })
    );
    // this.newObs();

    // Using Parameters
    // this.ar.url.subscribe((val) => console.log(val));
    // this.ar.paramMap.subscribe((paramMap) => {
    //   console.log(paramMap.get('id'));
    // });
  }

  goToProfile(id: number) {
    // Path parameter
    this.router.navigate(['/profile', id])

    // Query Parameter
    // this.router.navigate(['/profile'], {queryParams:{userId: 20}})
  }

  newObs() {
    const numObservable = new Observable((subscriber) => {
      console.log('Stream of data');
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
      subscriber.error('Error here');
      subscriber.next(4);
    });
    this.subscriptions.push(
      numObservable.subscribe((val) => {
        console.log(val);
      })
    );
  }
  ngOnDestroy(): void {
    // Unscubscribe
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
