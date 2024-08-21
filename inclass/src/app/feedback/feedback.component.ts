import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  username = new FormControl('miranda', [this.myRquired(), this.nameExists()]);
  // FormGroup
  messageForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: this.username,
    message: new FormControl(''),
  });
  // FormArray
  topicList = [
    { id: 1, name: 'Product Quality' },
    { id: 2, name: 'Customer Service' },
    { id: 3, name: 'Logistic Issues' },
  ];
  topicControls = this.topicList.map((val)=>{
    return new FormControl('');
  });

  // FormBuilder
  feedbackForm: any;
  // names datas
  names = ['user1', 'user2', 'user3'];
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log(this.username);
    
    const tpoicArray = new FormArray(this.topicControls);
    console.log(tpoicArray);
    this.messageForm.addControl('topics', tpoicArray);
    console.log(this.messageForm);

    this.initializeForm();
    console.log(this.feedbackForm);
  }

  initializeForm(){
    this.feedbackForm = this.fb.group({
      username: ['Please input your username'],
      email: [''],
      message: ['']
    })
  }

  onSubmit(){
    console.log(this.messageForm.value);
    //
  }
  // validator fn
  requiredFn(control: AbstractControl): ValidationErrors | null {
      if (!control.value){
        return {myRequired: 'This field is required'}
      }
      else {
        return null;
      }
  }
  myRquired(): ValidatorFn {
    return this.requiredFn;
  }

  // async validator
  nameExists(): AsyncValidatorFn{
    let names = ['user1', 'user2', 'user3'];
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(names.includes(control.value)).pipe(
        map((val: boolean)=>{
          return val ? null : { usernameDoesNotExists:  true}
        })
      )
    }
  }

  get emailControl() {
    return this.messageForm.get('email');
  }
  get topicControl() {
    return this.messageForm.get('topics') as FormArray;
  }
}
