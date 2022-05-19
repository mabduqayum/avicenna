import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteratureRoutingModule } from './literature-routing.module';
import { LiteratureComponent } from './literature.component';


@NgModule({
  declarations: [
    LiteratureComponent
  ],
  imports: [
    CommonModule,
    LiteratureRoutingModule
  ]
})
export class LiteratureModule { }
