import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/models/message.interface';
import { MessageService } from 'src/app/services/messages/message.service';
import { NewNoteComponent } from '../new-note/new-note.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  messages: Message[] = [];

  constructor(private msgService: MessageService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.msgService.getMessages().subscribe(response => {
      this.messages = response;
    })
  }

  openCreationModal() {
    this.modalService.open(NewNoteComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("closed");      
    }, (reason) => {
      console.log("dismissed");
    });
  }

}
