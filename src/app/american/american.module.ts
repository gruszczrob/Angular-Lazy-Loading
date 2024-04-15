import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericanRoutingModule } from './american-routing.module';
import { AmericanComponent } from './american.component';


@NgModule({
  declarations: [
    AmericanComponent
  ],
  imports: [
    CommonModule,
    AmericanRoutingModule
  ]
})
export class AmericanModule { }
