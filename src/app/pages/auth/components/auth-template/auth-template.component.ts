import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.scss']
})
export class AuthTemplateComponent {
  @Input() backgroundImage = 'assets/images/auth-bg.png';
}
