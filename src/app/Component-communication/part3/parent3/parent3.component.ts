import { Component, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  @ViewChild(Child3Component, { static: true }) child!: Child3Component;


  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.child.greetingFromChilderen())
  }

}
