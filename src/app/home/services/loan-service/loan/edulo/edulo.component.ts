import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/calc.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edulo',
  templateUrl: './edulo.component.html',
  styleUrls: ['./edulo.component.css']
})
export class EduloComponent implements OnInit {

  rate:number=9.5 ;

  EMI:number;
  constructor(private ec:CalcService) { }
  form1;
  ngOnInit() {
    this.form1=new FormGroup(
      {
        pamt:new FormControl(" "),
        tenure:new FormControl(" "),
        rate:new FormControl(" ")    
      }
    );
  }
  onSubmit(myForm)
  {
    console.log(myForm);

  }
  abc(p,t):void
  {
   this.EMI= this.ec.calculateEmi(p,this.rate,t);
  }


}
