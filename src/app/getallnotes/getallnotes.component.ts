import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  template:`<app-displaynotes [noteArray]="noteArray"></app-displaynotes>`,
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private note:NoteserviceService){}
  noteArray: any;
  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response)
      this.noteArray=response.data
      this.noteArray=this.noteArray.filter((note:any)=>{
        if(note.archieve==false && note.trash==false){
          return note;
        }
      })
    })
  }
}
