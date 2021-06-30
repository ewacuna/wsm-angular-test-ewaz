import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-header',
  templateUrl: './campaign-header.component.html',
  styleUrls: ['./campaign-header.component.scss'],
})
export class CampaignHeaderComponent implements OnInit {
  @Input() campaignName: any;
  @Input() campaignGroupName: any;
  @Input() campaignLength: any;

  constructor() {}

  ngOnInit(): void {}
}
