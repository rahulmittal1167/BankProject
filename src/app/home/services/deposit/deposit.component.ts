import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  rate:number=6.5 ;
  ma:number;

  constructor() { }

  ngOnInit() {
  }

  abc(p,t):void
  {
   this.ma= ((p*t*this.rate)/100)+p;
  }

}
