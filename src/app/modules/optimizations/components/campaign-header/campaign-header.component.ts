import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-campaign-header',
  templateUrl: './campaign-header.component.html',
  styleUrls: ['./campaign-header.component.scss'],
})
export class CampaignHeaderComponent implements OnInit {
  @Input() campaignName: any;
  @Input() campaignGroupName: any;
  @Input() campaignLength: any;
  @Input() continue: any;
  @Output() clickedContinue: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onContinue() {    
    this.clickedContinue.emit({ message: 'Success message' });
  }
}
