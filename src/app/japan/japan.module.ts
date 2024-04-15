import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JapanRoutingModule } from './japan-routing.module';
import { JapanComponent } from './japan.component';


@NgModule({
  declarations: [
    JapanComponent
  ],
  imports: [
    CommonModule,
    JapanRoutingModule
  ]
})
export class JapanModule { }
