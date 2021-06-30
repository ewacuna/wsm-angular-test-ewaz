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
  subs = new SubscriptionsContainer();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCampaignData();
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private getCampaignData() {
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
}
