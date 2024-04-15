import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';

const routes: Routes = [
  { path: '', component: CarsComponent, children:[{ path: 'japan', loadChildren: () => import('../japan/japan.module').then(m => m.JapanModule) }, { path: 'american', loadChildren: () => import('../american/american.module').then(m => m.AmericanModule) }, { path: 'german', loadChildren: () => import('../german/german.module').then(m => m.GermanModule)
}]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
