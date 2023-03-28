import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
  // deps: [MessageService]
})
export class ToasterService {

  constructor(private messageService: MessageService) { }

  success({ summary, detail, ...args }: Message): void {
    this.messageService.add({ severity: 'success', summary, detail, ...args });
  }
}
