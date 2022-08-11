import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";

export interface BankDetail {
  bankName: string;
  bankAccountNumber: string;
  bankAccountDetails: string;
}

export interface BankDetailMetadata {
  title: string;
  bankNameLabel: string;
  bankAccountNumberLabel: string;
  bankDetailsLabel: string;
  updateInformationLabel: string;
  communicationMetadata?: CommunicationMetadata;
}
