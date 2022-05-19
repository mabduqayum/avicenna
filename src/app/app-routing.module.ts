import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)},
  {path: 'main', redirectTo: ''},
  { path: 'page404', loadChildren: () => import('./pages/page404/page404.module').then(m => m.Page404Module) },
  { path: 'influence', loadChildren: () => import('./pages/influence/influence.module').then(m => m.InfluenceModule) },
  { path: 'medicine', loadChildren: () => import('./pages/medicine/medicine.module').then(m => m.MedicineModule) },
  { path: 'literature', loadChildren: () => import('./pages/literature/literature.module').then(m => m.LiteratureModule) },
  { path: 'philosophy', loadChildren: () => import('./pages/philosophy/philosophy.module').then(m => m.PhilosophyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
