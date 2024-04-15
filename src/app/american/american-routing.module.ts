import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericanComponent } from './american.component';

const routes: Routes = [{ path: '', component: AmericanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericanRoutingModule { }
