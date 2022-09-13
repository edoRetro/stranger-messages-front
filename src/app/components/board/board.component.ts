import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.interface';
import { MessageService } from 'src/app/services/messages/message.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  messages: Message[] = [];

  constructor(private msgService: MessageService) { }

  ngOnInit(): void {
    this.msgService.getMessages().subscribe(response => {
      this.messages = response;
    })
  }

}
