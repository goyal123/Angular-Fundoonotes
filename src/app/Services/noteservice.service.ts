import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  token:any
  constructor(private httpservice:HttpserviceService) {
    this.token=localStorage.getItem('token')
   }
  createnote(reqdata:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.postservice('https://localhost:44323/api/Notes/CreateNote',reqdata,true,header)
  }

  getallnotes(){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.getservice(`https://localhost:44323/api/Notes/GetNote`,true,header)
  }

  trashed(reqdata:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.patchservice(`https://localhost:44323/api/Notes/IsTrashed?noteId=${reqdata}`,reqdata,true,header)
  }

  Archieve(reqdata:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.patchservice(`https://localhost:44323/api/Notes/IsArchieve?noteId=${reqdata}`,reqdata,true,header)
  }

  updatenote(reqdata:any,noteId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.putservice(`https://localhost:44323/api/Notes/UpdateNote?noteId=${noteId}`,reqdata,true,header)
  }

  colornote(reqdata:any){
    console.log(reqdata)
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpservice.patchservice(`https://localhost:44323/api/Notes/UpdateColor?noteId=${reqdata.noteId}&color=${reqdata.colorId}`,reqdata,true,header)
  }

}
