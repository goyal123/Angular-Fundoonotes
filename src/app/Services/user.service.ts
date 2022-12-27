import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpservice:HttpserviceService) { }
  login(reqdata:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.postservice('https://localhost:44323/api/User/Login',reqdata,false,header)
  }

  register(reqdata:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.postservice('https://localhost:44323/api/User/Register',reqdata,false,header)
  }

  forgetpass(reqdata:string){
    console.log(reqdata)
    let newmail=reqdata.replace("@","%40")
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.httpservice.postservice(`https://localhost:44323/api/User/ForgotPassword?emailid=${newmail}`,newmail,false,header)
  }
}
