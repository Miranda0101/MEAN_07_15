import { Component, OnInit } from '@angular/core';
import { Day3Service } from '../day3.service';
@Component({
  selector: 'app-day3-sibling',
  templateUrl: './day3-sibling.component.html',
  styleUrl: './day3-sibling.component.scss',
})
export class Day3SiblingComponent implements OnInit {
  msg?: string;

  constructor(private day3: Day3Service) {}

  ngOnInit(): void {
    // console.log(this.day3);
    console.log(this.day3.shortMsg)
  }

  changeData() {
    this.day3.shortMsg = 'message has been updated';
    console.log(this.day3.shortMsg)
  }

}
