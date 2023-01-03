import { compileNgModule } from '@angular/compiler';
import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteserviceService } from '../Services/noteservice.service';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrls: ['./noteicons.component.scss']
})
export class NoteiconsComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private note:NoteserviceService){}
  @Input () noteID:any
  @Input () notecolor:any
  colorId:any
  colorarray = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
  ngOnInit(){
    console.log(this.noteID)
  }

  isTrash(){
    this.note.trashed(this.noteID).subscribe((response:any)=>{
      console.log(response)
    })
  }

  isArchieve(){
    this.note.Archieve(this.noteID).subscribe((response:any) =>{
      console.log(response)
    })
  }

  updatecolor(color:any){
    console.log(color)
    let colorr=color.replace("#","%23")
    console.log(this.noteID)
    this.colorId=colorr
    let reqdata={
      noteId:this.noteID,
      colorId:this.colorId
    }
    console.log(reqdata)
    this.note.colornote(reqdata).subscribe((response)=>{
      console.log(response)
    })
  }


}
