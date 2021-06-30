import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { SubscriptionsContainer } from 'src/app/shared/helpers';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent implements OnInit, OnDestroy {
  campaignData: Array<any> = [];
  campaignName: string = '';
  campaignLength: number = 0;
  campaignGroupName: string = '';
  subs = new SubscriptionsContainer();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCampaign();
    this.getCampaignInfo();
    this.getCampaignGroup();
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private getCampaign() {
    const endpoint: string =
      'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/items/';
    this.subs.add = this.apiService.sendGet(endpoint).subscribe(
      (res: any) => {
        console.log(res);
        this.campaignData = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getCampaignGroup() {
    const endpoint: string =
      'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/campaign-groups/?id=1';
    this.subs.add = this.apiService.sendGet(endpoint).subscribe(
      (res: any) => {
        this.campaignGroupName = res[0]?.name || 'Unknown';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getCampaignInfo() {
    const endpoint: string =
      'https://7e1ec65d-6cc3-4a1e-a781-c265f6cc45da.mock.pstmn.io/campaigns/';
    this.subs.add = this.apiService.sendGet(endpoint).subscribe(
      (res: any) => {
        this.campaignName = res[0]?.name || 'Unknown';
        this.campaignLength = res?.length || 0;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
