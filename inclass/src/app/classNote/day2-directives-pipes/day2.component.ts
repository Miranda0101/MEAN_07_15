import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss'
})
export class Day2Component implements OnInit{

arr1=[{name:"JR"},{name:"Miranda"},{name:"David"},{name:"Luke"},{name:"JR"}]

arr2=[{name:"JR"},{name:"Miranda"},{name:"David"},{name:"Patrick"}]

arr = this.arr1;
  ngOnInit(): void {


  }



  changeDataSource() {
    this.arr = this.arr2;
    // this.arr.push({name:"Adam"})
  }



  isShow = false;

  subject = "Spanish";

}
