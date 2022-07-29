import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { environment } from 'src/environments/environment';
import { AccessManagement, AccessManagementMetadata } from '../access-management';
import { AccessManagementBaseComponent } from '../access-management-base.component';

@Component({
  selector: 'f2ml-access-management-mobile',
  templateUrl: './access-management-mobile.component.html',
  styleUrls: ['./access-management-mobile.component.scss']
})
export class AccessManagementMobileComponent extends AccessManagementBaseComponent implements OnInit {

  @ViewChildren(MatInput) override matInputs!: QueryList<MatInput>;

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: AccessManagement[] = [];
  @Input() metadata!: AccessManagementMetadata;

  override ngOnInit(): void {
    this.columns = this.columns.slice(0, this.columns.length - 1);
    super.ngOnInit();
  }

  getIconUrl(icon: string) {
    return environment.cms.endpoint + icon;
  }
}
