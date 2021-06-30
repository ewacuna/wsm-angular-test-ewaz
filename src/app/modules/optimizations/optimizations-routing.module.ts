import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CampaignsComponent } from './pages';

const routes: Routes = [
  {
    path: 'campaigns',
    component: CampaignsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptimizationsRoutingModule {}
