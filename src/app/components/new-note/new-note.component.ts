import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageDTO } from 'src/app/models/DTO/message.dto';
import { Message } from 'src/app/models/message.interface';
import { MessageService } from 'src/app/services/messages/message.service';
import { AppConstants } from 'src/app/utils/constants';

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

  get messageLength() { return this.creationForm.get('message')?.value.length }
  get authorLength() { return this.creationForm.get('authorName')?.value.length }

  constructor(private msgService: MessageService,
              private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submitForm() {    
    let formValue = this.creationForm.value as MessageDTO;
    formValue.createdDate = new Date();
    this.msgService.newMessage(formValue).subscribe(saveResponse => {
      //Filtrar respuesta del backend, idealmente un success o algo así.
      this.activeModal.close(AppConstants.SAVED_OK_STATUS);
    });
  }

  closeModal() {
    this.activeModal.close(AppConstants.CLOSE_MODAL_STATUS)
  }

}
