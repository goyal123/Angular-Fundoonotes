import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  constructor(private httpclient:HttpClient) { }
  postservice(url:string,reqdata:any,token:boolean=false,httpOptions:any){
    return this.httpclient.post(url,reqdata,token && httpOptions)
  }
  getservice(){

  }
}
