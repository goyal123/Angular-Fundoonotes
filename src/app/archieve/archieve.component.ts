import { Component } from '@angular/core';
import { NoteserviceService } from '../Services/noteservice.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent {
  constructor(private note:NoteserviceService){

  }

  ngOnInit(){
    this.getarchieve();
  }

  getarchieve(){
    this.note.getallnotes().subscribe((response:any)=>{
      console.log(response)
    })
  }
}
