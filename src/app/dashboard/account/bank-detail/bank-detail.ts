import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

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
  faqMetadata?: FaqMetadata;
}
