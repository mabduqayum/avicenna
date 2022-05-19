import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluenceRoutingModule } from './influence-routing.module';
import { InfluenceComponent } from './influence.component';


@NgModule({
  declarations: [
    InfluenceComponent
  ],
  imports: [
    CommonModule,
    InfluenceRoutingModule
  ]
})
export class InfluenceModule { }
