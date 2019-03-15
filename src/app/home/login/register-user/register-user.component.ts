import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private rs:RestService) { }
  form;
  ngOnInit() {
    this.form=new FormGroup(
      {
        id:new FormControl(""),
        name:new FormControl("",Validators.compose(
          [
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),
        age:new FormControl("",Validators.compose(
          [
            Validators.required
           
          ]
        )),
        dob:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        fname:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        bg:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        add:new FormControl("",Validators.compose(
          [
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+')
          ]
        )),
        contact:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        qual:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        gender:new FormControl(" "),
        
        pass1:new FormControl("",Validators.compose(
          [
            Validators.required
          ]
        )),
        pass2:new FormControl("",Validators.compose(
          [
            Validators.required
            
          ]
        )),
        
      }
    );

   
  }

  postItem(my)
  {
    this.rs.postUser(my)
    .subscribe(
      (response:any)=>console.log('put successfully')
    )
  }
  onSubmit(myForm)
  {
    console.log(myForm);

  }

}
