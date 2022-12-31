import { Component,Inject,Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from '../Services/noteservice.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  constructor(private note:NoteserviceService,public dialogref:MatDialogRef<UpdatenotesComponent>,@Inject(MAT_DIALOG_DATA) public modeldata:any)
  {
  }
  title:any;
  description:any;
  noteId:any
  ngOnInit(){
    console.log(this.modeldata)
    this.title=this.modeldata.title;
    this.description=this.modeldata.description,
    this.noteId=this.modeldata.noteId
  }
  
  updatenote():void{
    let reqdata={
      title:this.title,
      description:this.description,
      noteId:this.noteId
    }
    this.note.updatenote(reqdata,this.noteId).subscribe((response:any)=>{
      console.log(response)
    })
    this.dialogref.close();
  }
}
