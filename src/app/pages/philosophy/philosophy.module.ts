import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhilosophyRoutingModule } from './philosophy-routing.module';
import { PhilosophyComponent } from './philosophy.component';


@NgModule({
  declarations: [
    PhilosophyComponent
  ],
  imports: [
    CommonModule,
    PhilosophyRoutingModule
  ]
})
export class PhilosophyModule { }
