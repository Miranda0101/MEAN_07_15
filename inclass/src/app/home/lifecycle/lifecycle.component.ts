import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked{
  @Input() data = 'In Child';
  constructor(){
    console.log('Child component starts')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child ngOnChanges invoked')
  }
  ngOnInit(){
    console.log('Child ngOnInit invoked')
  }
  ngAfterContentInit(): void {
    console.log('Child ngAfterContentInit ')
  }
  ngAfterViewInit(): void {
    console.log('Child ngAfterViewInit ')
  }
  ngDoCheck(): void {
    console.log('Child ngDoCheck ')
  }
  ngAfterContentChecked(): void {
    console.log('Child ngAfterContentChecked')
  }
  ngAfterViewChecked(): void {
    console.log('Child ngAfterViewChecked')
  }
}
