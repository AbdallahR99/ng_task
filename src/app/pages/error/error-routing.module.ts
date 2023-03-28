import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routePaths } from '@core/constants/routes';
import { ErrorComponent } from './error.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnknownComponent } from './pages/unknown/unknown.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    children: [
      { path: routePaths.ErrorNotFound, component: NotFoundComponent },
      { path: routePaths.ErrorUnknown, component: UnknownComponent },
      { path: '**', redirectTo: routePaths.ErrorNotFound },
      { path: '***', redirectTo: routePaths.ErrorNotFound },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
