import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageDTO } from 'src/app/models/DTO/message.dto';
import { Message } from 'src/app/models/message.interface';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  creationForm: FormGroup = new FormGroup({
    message: new FormControl("", Validators.required),
    authorName: new FormControl("", Validators.required),    
  })

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
  }

  submitForm() {    
    let formValue = this.creationForm.value as MessageDTO;
    formValue.createdDate = new Date();
    this.msgService.newMessage(formValue).subscribe(saveResponse => {
      console.log("Saved!");      
    });
  }

}
