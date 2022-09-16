import { Component, Input, OnInit } from '@angular/core';
import { AccessManagementEnterprise } from '../access-management-entreprise';

@Component({
  selector: 'f2ml-access-management-enterprise-mobile',
  templateUrl: './access-management-enterprise-mobile.component.html',
  styleUrls: ['./access-management-enterprise-mobile.component.scss']
})
export class AccessManagementEnterpriseMobileComponent implements OnInit {

  @Input() columns: { name: string, header: string, value: CallableFunction }[] = [];
  @Input() dataSource: AccessManagementEnterprise[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
