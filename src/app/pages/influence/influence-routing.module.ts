import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluenceComponent } from './influence.component';

const routes: Routes = [{ path: '', component: InfluenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluenceRoutingModule { }
