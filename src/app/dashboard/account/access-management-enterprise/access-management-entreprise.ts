import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

export interface AccessManagementEnterprise {
  piva: string;
  companyName: string;
}

export interface AccessManagementEnterpriseMetadata {
  title: string;
  accessQuestionLabel: string,
  noAccessToDisplayLabel: string,
  tableMetadata: AccessManagementEnterpriseMetadataTable;
  communicationMetadata?: CommunicationMetadata;
  faqMetadata?: FaqMetadata;
}

export interface AccessManagementEnterpriseMetadataTable {
  pivaLabel: string;
  companyNameLabel: string;
  manageAccessesLabel: string,
  manageAccessesCtaLabel: string,
  maxAccessNumber: number,
  viewMoreLabel: string,
  viewLessLabel: string,
  noAccessToDisplayLabel: string
}
