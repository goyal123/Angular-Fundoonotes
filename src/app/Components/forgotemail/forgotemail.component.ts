import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent {
  constructor(private formBuilder:FormBuilder,private user:UserService){}
  submitted = false;
  forgetpassform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^([0-9a-zA-Z])+([.+-][0-9a-zA-Z]+)?@([0-9a-zA-Z])+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2})?$")]),
  })

  get f(){
    return this.forgetpassform.controls;
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.forgetpassform.valid) {
      let payload={
        email:this.forgetpassform.value.email,
      }
      this.user.forgetpass(String(payload.email)).subscribe((response:any)=>{console.log(response)})
  }
  }
}
