import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { RestService } from 'src/app/rest.service';
import { User } from '../User';
import{Response} from '@angular/http/src/static_response';
import { loadLContextFromNode } from '@angular/core/src/render3/discovery_utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rs:RestService) { }

  form1;
errorMsg:string=null;
disp2:boolean=false;

  ngOnInit() {
    this.form1=new FormGroup(
      {
        Id:new FormControl(""),
        password:new FormControl(""),
      }
    );
  }
 
 
  onSubmit(myForm)
  {
    let id=myForm['Id']
    let pass=myForm['password']
    console.log(pass);
    this.rs.getItem(id)
    .subscribe(
      (response:any)=>{
        if(pass==response.json()['pass1'])
        {
          this.disp2=true;
          this.errorMsg=null;
        }
        else{
          this.disp2=false;
          this.errorMsg="Invalid Password";
        }
      },
      (error)=>{
        this.disp2=false;
        this.errorMsg="Invalid Customer Id";
      }
    )

  }
 
  
}
