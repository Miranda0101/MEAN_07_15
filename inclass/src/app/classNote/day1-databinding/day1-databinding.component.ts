import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-day1-databinding',
  templateUrl: './day1-databinding.component.html',
  styleUrls: ['./day1-databinding.component.scss'],
})
export class Day1DatabindingComponent implements OnInit {
  @Input() welcomeMsg: string = 'welcome to databinding';

  usernameFormControl = new FormControl('JR');

  ngOnInit(): void {
    console.log(this.usernameFormControl);
  }
  // obj?.value  --- cannot find "value" of undefined

  // ? or !

  // if(welcomeMsg?.value >1 ){

  //}

  // 1 way databinding MVC => model update view, view update controller, controller update model
  // 1.1 String interpolation
  // welcomeMsg = {msg:"welcome to databinding"}

  // name:string = "JR";
  // constructor(){
  //   this.name = "JR";
  // }
  // 1.2 property binding
  placeholderMsg = 'Hello David';

  // 1.3 event binding
  handleClick() {
    window.alert('button has been clicked');
  }

  // 2 Two way binding
  // 2.1 Template Driven Forms -- input
  //
  defaultMsg: string = 'please entering your name';

  // resetMsg() {
  //   this.defaultMsg = 'please entering your name';
  // }

  // 2.2 Reactive Forms --- input

  // formcontrol === 1 single value of an input field
  // formGroup === a group of formControls
  // formArray ===> formControl/ FormGroup, FormArray

  // amazon e-commerce --- product a huge form which contains all the products
  // the huge form --- formArray
  // each Product --- formGroup
  // each field of Product details --- formControl

  handleChange(){
    console.log(this.usernameFormControl.value)
  }
  resetMsg() {
    this.usernameFormControl.setValue("David");
  }

  // 2 ways databinding MVVM
}
