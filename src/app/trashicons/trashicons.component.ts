import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteserviceService } from '../Services/noteservice.service';

@Component({
  selector: 'app-trashicons',
  templateUrl: './trashicons.component.html',
  styleUrls: ['./trashicons.component.scss']
})
export class TrashiconsComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private note:NoteserviceService){}
  @Input () noteID:any
  @Input () notecolor:any
  ngOnInit(){
    console.log(this.noteID)
  }

  isTrash(){
    this.note.trashed(this.noteID).subscribe((response:any)=>{
      console.log(response)
    })
  }

  isDelete(){
    this.note.deletenote(this.noteID).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
