import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationsRoutingModule } from './optimizations-routing.module';
import { CampaignsComponent } from './pages';

@NgModule({
  declarations: [CampaignsComponent],
  imports: [CommonModule, OptimizationsRoutingModule],
})
export class OptimizationsModule {}
