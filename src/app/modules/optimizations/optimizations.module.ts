import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptimizationsRoutingModule } from './optimizations-routing.module';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { CampaignsComponent } from './pages';
import { CampaignHeaderComponent } from './components';

@NgModule({
  declarations: [CampaignsComponent, CampaignHeaderComponent],
  imports: [
    CommonModule,
    OptimizationsRoutingModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
  ],
})
export class OptimizationsModule {}
