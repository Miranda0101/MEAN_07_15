import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  usersList: User[] = [];
  subscriptions: Subscription[] = [];
  constructor(private users: UserService){}
  ngOnInit(){
    this.subscriptions.push(this.users.getUsers().subscribe((val)=>{
      this.usersList = val;
      console.log(this.usersList);
    }));
    this.newObs();
  }
  newObs(){
    const numObservable = new Observable((subscriber)=>{
      console.log('Stream of data')
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
      subscriber.error('Error here')
      subscriber.next(4)
    })
    this.subscriptions.push(numObservable.subscribe((val)=>{
      console.log(val);
    }));
  }
  ngOnDestroy(): void {
      // Unscubscribe
      this.subscriptions.forEach((sub)=>sub.unsubscribe());
  }
}
