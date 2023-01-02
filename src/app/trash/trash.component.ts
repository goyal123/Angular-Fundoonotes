import { Component } from '@angular/core';
import { NoteserviceService } from '../Services/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  constructor(private note:NoteserviceService){

  }
  notelist:any
  ngOnInit(){
    this.gettrash();
  }

  gettrash(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response)
      this.notelist=response.data
      this.notelist=this.notelist.filter((note:any)=>{
        if(note.archieve==false && note.trash==true){
          return note;
        }
      })
    })
  }
}
