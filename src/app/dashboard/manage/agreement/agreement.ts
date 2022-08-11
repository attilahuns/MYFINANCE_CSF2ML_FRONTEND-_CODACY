import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";

export interface Agreement {
  contactHolder: string;
  vehicule: string;
  registrationNumber: string;
  financeProduct: string;
  agreementNumber: string;
  agreementStartDate: string;
  mot: string;
}
export interface AgreementMetadata {
  title: string;
  viewAgreementBtnLabel: string;
  viewLessLabel: string;
  viewMoreLabel: string;
  displayedRowsLimit: number;
  emptyListMessage: string;
  emptyContractListMessage: string,
  tableMetadata: AgreementMetadataTable;
  communicationMetadata: CommunicationMetadata;
}
export interface AgreementMetadataTable {
  contractHolderLabel: string;
  vehiculeLabel: string;
  registrationNumberLabel: string;
  financeProductLabel: string;
  agreementNumberLabel: string;
  agreementStartDate: string;
  detailsLabel: string;
}
