import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/noteservice.service';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  public show=true;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private note:NoteserviceService){}
  noteform = new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })

  isShow(){
    this.show=!this.show;
  }

  onSubmit() {
    this.submitted = true;
    this.isShow()
    if (this.noteform.valid) {
      let payload={
        title:this.noteform.value.title,
        description:this.noteform.value.description
      }
      this.note.createnote(payload).subscribe((response:any)=>{console.log(response)})
    }
  }
}
