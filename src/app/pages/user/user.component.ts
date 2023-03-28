import { Component } from '@angular/core';
import { user } from '@core/constants/data';
import { Gender } from '@core/constants/gender.enum';
import { ResidentStatus } from '@core/constants/resident-status.enum';
import { AppRoutes } from '@core/constants/routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = user;
  residentStatus = ResidentStatus;
  routes = AppRoutes;
  genders = {
    [Gender.Male]: 'Male',
    [Gender.Female]: 'Female',
  }
}
