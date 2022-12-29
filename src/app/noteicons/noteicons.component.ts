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


}
