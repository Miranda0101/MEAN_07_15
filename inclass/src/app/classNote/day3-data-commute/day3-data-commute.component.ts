import { Component } from '@angular/core';

@Component({
  selector: 'app-day3-data-commute',
  templateUrl: './day3-data-commute.component.html',
  styleUrl: './day3-data-commute.component.scss',
})
export class Day3DataCommuteComponent {
  // parent child  === property

  helloMsg = { name: 'Hello to the data communication class' };

  handleCustomEvent(event:boolean) {
    console.log(event);
  }
}
