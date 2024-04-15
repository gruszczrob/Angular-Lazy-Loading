import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GermanComponent } from './german.component';

const routes: Routes = [{ path: '', component: GermanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GermanRoutingModule { }
