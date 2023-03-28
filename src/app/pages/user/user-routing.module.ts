import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePaths } from '@core/constants/routes';
import { StatusDetailsComponent } from './pages/status-details/status-details.component';
import { UserStatusComponent } from './pages/user-status/user-status.component';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent, children: [
  { path: routePaths.UserStatus, component: UserStatusComponent },
  { path: routePaths.UserStatus + '/:name', component: StatusDetailsComponent },
  { path: '', redirectTo: routePaths.UserStatus, pathMatch: 'full' },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
