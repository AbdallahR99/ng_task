import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteDataKeys } from '@core/constants/route-data';
import { routePaths } from '@core/constants/routes';

const routes: Routes = [
  {
    path: routePaths.Home,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: routePaths.Auth,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    data: { [RouteDataKeys.ShowLayout]: false },
  },
  {
    path: routePaths.Error,
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
  { path: routePaths.User, loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },

  { path: '', redirectTo: routePaths.Home, pathMatch: 'full' },
  { path: '**', redirectTo: `${routePaths.Error}/${routePaths.ErrorNotFound}` },
  {
    path: '***',
    redirectTo: `${routePaths.Error}/${routePaths.ErrorNotFound}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
