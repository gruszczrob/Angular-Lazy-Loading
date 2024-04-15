import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GermanRoutingModule } from './german-routing.module';
import { GermanComponent } from './german.component';


@NgModule({
  declarations: [
    GermanComponent
  ],
  imports: [
    CommonModule,
    GermanRoutingModule
  ]
})
export class GermanModule { }
