import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private user: UserService,private router:Router) { }

  submitted = false;
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^([0-9a-zA-Z])+([.+-][0-9a-zA-Z]+)?@([0-9a-zA-Z])+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2})?$")]),
    password: new FormControl('', [Validators.required])
  })

  get f() {
    return this.loginform.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginform.valid) {
      let payload = {
        email: this.loginform.value.email,
        password: this.loginform.value.password
      }
      this.user.login(payload).subscribe((response: any) => { 
        console.log(response)
        localStorage.setItem("token",response.data)
        this.router.navigateByUrl('/dashboard/getallnotes')
       })
    }
  }



}

