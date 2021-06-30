import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/optimizations/optimizations.module').then(
        (module) => module.OptimizationsModule
      ),
  },
  { path: '**', redirectTo: 'campaigns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
