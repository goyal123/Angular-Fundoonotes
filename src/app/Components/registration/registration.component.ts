import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  submitted = false;
  constructor(private formBuilder:FormBuilder,private user:UserService){}
  registrationform = new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]{3,}")]),
    lname:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]{3,}")]),
    email:new FormControl('',[Validators.required,Validators.pattern("^([0-9a-zA-Z])+([.+-][0-9a-zA-Z]+)?@([0-9a-zA-Z])+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2})?$")]),
    password:new FormControl('',[Validators.required]),
    cnfpassword:new FormControl('',[Validators.required])
  })

  get f(){
    return this.registrationform.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registrationform.valid) {
      let payload={
        firstname:this.registrationform.value.fname,
        lastname:this.registrationform.value.lname,
        email:this.registrationform.value.email,
        password:this.registrationform.value.password
      }
      this.user.register(payload).subscribe((response:any)=>{console.log(response)})
  }
  }
}
