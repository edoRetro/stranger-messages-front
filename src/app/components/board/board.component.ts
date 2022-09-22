import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Message } from 'src/app/models/message.interface';
import { MessageService } from 'src/app/services/messages/message.service';
import { AppConstants } from 'src/app/utils/constants';
import { NewNoteComponent } from '../new-note/new-note.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  messages: Message[] = [];

  constructor(private msgService: MessageService,
              private spinner: NgxSpinnerService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.spinner.show();
    this.loadAllMessages();
  }

  loadAllMessages() {
    this.msgService.getMessages().subscribe(response => {
      this.messages = response;
      this.spinner.hide();
    })
  }

  openCreationModal() {
    this.modalService.open(NewNoteComponent, {centered: true, 
                                              ariaLabelledBy: 'modal-basic-title',
                                              backdrop: 'static' }).result.then((result) => {
      if(result == AppConstants.SAVED_OK_STATUS) {
        this.loadAllMessages();
      }
      
    }, (dismissReason) => {
    });
  }

}
