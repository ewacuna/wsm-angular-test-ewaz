import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/core/services';
import { SubscriptionsContainer } from 'src/app/shared/helpers';
import { NotificationService } from 'src/app/shared/utils';

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
  continueButton: boolean = true;
  subs = new SubscriptionsContainer();

  constructor(
    private apiService: ApiService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.getCampaign();
    this.getCampaignInfo();
    this.getCampaignGroup();
  }

  ngOnDestroy(): void {
    this.subs.dispose();
  }

  private getCampaign() {
    this.subs.add = this.apiService.sendGet('/items').subscribe(
      (res: any) => {
        this.campaignData = res;
      },
      (error) => {
        this.notification.showError('Something went wrong');
      }
    );
  }

  private getCampaignGroup() {
    this.subs.add = this.apiService.sendGet('/campaign-groups/?id=1').subscribe(
      (res: any) => {
        this.campaignGroupName = res[0]?.name || 'Unknown';
      },
      (error) => {
        this.notification.showError('Something went wrong');
      }
    );
  }

  private getCampaignInfo() {
    this.subs.add = this.apiService.sendGet('/campaigns/').subscribe(
      (res: any) => {
        this.campaignName = res[0]?.name || 'Unknown';
        this.campaignLength = res?.length || 0;
      },
      (error) => {
        this.notification.showError('Something went wrong');
      }
    );
  }

  onContinue(event: any) {
    this.notification.showSuccess(event.message);
  }

  onCheck(action: any) {
    if (action?.Checked === true) {
      action.Checked = false;
    } else {
      action.Checked = true;
    }

    const checkedActions: any = [];

    this.campaignData.forEach((campaign) => {
      campaign.actions.forEach((act: any) => {
        if (act?.Checked === true) {
          checkedActions.push(act);
        }
      });
    });

    if (checkedActions?.length > 0) {
      this.continueButton = false;
    } else {
      this.continueButton = true;
    }
  }
}
