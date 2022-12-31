import { Component,Input,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit{
  @Input() noteArray:any
  constructor(private dialog:MatDialog){
  }
  ngOnInit() {
    
    }

    openDialog(noteArray:any) {
      const dialogRef = this.dialog.open(UpdatenotesComponent,{
      width: '40vw',
      height: '150px',
      data: {title: noteArray.title, description: noteArray.description,noteId: noteArray.noteID},
      });
    }
}
