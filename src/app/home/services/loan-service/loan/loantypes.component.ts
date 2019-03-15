import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'LoanCalc',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.css']
})
export class LoantypesComponent implements OnInit {
 
  option:number=1;
  
  constructor() { }

  ngOnInit() {
  }
 
  display(op):void{
    this.option=op;
  }

}
