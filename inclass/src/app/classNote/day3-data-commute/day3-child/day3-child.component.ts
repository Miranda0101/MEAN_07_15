import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Day3Service } from '../day3.service';

@Component({
  selector: 'app-day3-child',
  templateUrl: './day3-child.component.html',
  styleUrl: './day3-child.component.scss',
})
export class Day3ChildComponent implements OnInit {
  constructor(private day3: Day3Service) {}

  @Input() displayMsg: any = { name: 'message here' };

  @Output() outputEvent: EventEmitter<boolean> = new EventEmitter();

  showMsg?: string;

  ngOnInit(): void {
    this.showMsg = this.day3.shortMsg;
  }

  triggerEE() {
    console.log('event emit values');
    this.outputEvent.emit(true);
  }
  RefreshData(){
    this.showMsg = this.day3.shortMsg;
  }
}
