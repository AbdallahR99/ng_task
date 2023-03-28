import { Component } from '@angular/core';
import { User } from '@core/models/user/user.model';
import { UserComponent } from '../../user.component';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss']
})
export class UserStatusComponent {
  get user(): User {
    return this.userComponent.user;
  }

  constructor(
    private userComponent: UserComponent
  ) {}

}
