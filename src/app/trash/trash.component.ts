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

  ngOnInit(){
    this.gettrash();
  }

  gettrash(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response)
    })
  }
}
