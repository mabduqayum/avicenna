import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiteratureComponent } from './literature.component';

const routes: Routes = [{ path: '', component: LiteratureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiteratureRoutingModule { }
