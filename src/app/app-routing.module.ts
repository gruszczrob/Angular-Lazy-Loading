import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, { path: 'planes', loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
