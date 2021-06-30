import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptimizationsRoutingModule } from './optimizations-routing.module';
import { CampaignsComponent } from './pages';
import { CampaignHeaderComponent } from './components';

@NgModule({
  declarations: [CampaignsComponent, CampaignHeaderComponent],
  imports: [CommonModule, OptimizationsRoutingModule],
})
export class OptimizationsModule {}
