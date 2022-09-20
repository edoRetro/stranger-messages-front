import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageDTO } from 'src/app/models/DTO/message.dto';
import { Message } from 'src/app/models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMessages() {
    return this.httpClient.get<Message[]>('https://stranger-messages-api.herokuapp.com/message/');
  }

  newMessage(newMessage: MessageDTO) {
    const apiURL = 'https://stranger-messages-api.herokuapp.com/message/';
    return this.httpClient.post<any>(apiURL, newMessage, {});
  }
  
}
