import {Component} from '@angular/core';
import {MessageService} from './message.service';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  constructor(
    public apiService: ApiService,
    public messageService: MessageService) {
  }

  keepMessageOpen() {
    this.messageService.shouldKeepMessageOpen = true;
    return false;
  }
}
