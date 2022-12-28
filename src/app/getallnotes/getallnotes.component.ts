import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,private note:NoteserviceService){}
  ngOnInit(): void {
    this.getallnotes();
  }
  getallnotes(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response)
    })
  }
}
