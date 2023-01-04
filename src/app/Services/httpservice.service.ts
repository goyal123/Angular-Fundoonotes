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
  getservice(url:string,token:boolean=false,httpOptions:any){
    return this.httpclient.get(url,token&&httpOptions)
  }

  patchservice(url:string,reqdata:any,token:boolean=false,httpOptions:any){
    return this.httpclient.patch(url,reqdata,token && httpOptions)
  }

  putservice(url:string,reqdata:any,token:boolean=false,httpOptions:any){
    return this.httpclient.put(url,reqdata,token && httpOptions)
  }

  deleteservice(url:string,token:boolean=false,httpOptions:any){
    return this.httpclient.delete(url,token && httpOptions)
  }
  
}
