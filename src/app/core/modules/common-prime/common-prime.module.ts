import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    RippleModule,
    ProgressBarModule,
    ToastModule,
    AvatarModule,
    MessagesModule,
    DividerModule,
  ],
  providers: [
    {
      provide: MessageService,
      useClass: MessageService
    }
  ]
})
export class CommonPrimeModule { }
