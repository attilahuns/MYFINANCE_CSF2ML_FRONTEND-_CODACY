import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

export interface ContractDetail {
  document: string;
  reference: string;
  date: string;
  download: string;
  view: string;
  unopened: boolean;
}

export interface ContractDetailMetadata {
  title: string;
  makePaymentLabel?: string;
  modifyAgreementLabel?: string;
  paymentHistoryLabel?: string;
  agreementDetailMetadata: AgreementDetailMetadata;
  vehiculeDetailMetadata: VehiculeDetailMetadata;
  serviceDetailMetadata: ServiceDetailMetadata;
  documentDetailMetadata: DocumentDetailMetadata;
  communicationMetadata?: CommunicationMetadata;
  faqMetadata?: FaqMetadata;
}

export interface AgreementDetailMetadata {
  title: string;
  financeProductLabel: string;
  amountFinancedLabel: string;
  totalContractMileageLabel: string;
  numberOfInstalmentsLabel: string;
  nextPaymentDateLabel: string;
  amountOfNextPaymentLabel: string;
  agreementStartDateLabel: string;
  agreementEndDateLabel: string;
  tanLabel: string;
  residualValueLabel: string;
}

export interface VehiculeDetailMetadata {
  title: string;
  vinLabel: string;
  modelLabel: string;
  registrationNumberLabel: string;
  co2ConsumptionLabel: string;
  deliveryDateLabel: string;
  horsepowerLabel: string;
  cylinderLabel: string;
}

export interface ServiceDetailMetadata {
  title: string;
  viewMoreLabel: string;
  viewLessLabel: string;
  displayedRowsLimit: number;
}

export interface DocumentDetailMetadata {
  documentLabel: string;
  referenceLabel: string;
  dateLabel: string;
  downloadColumn: {
    label: string,
    picto: string
  };
  viewColumn: {
    label: string,
    picto: string
  };
  viewMoreLabel: string;
  viewLessLabel: string;
  displayedRowsLimit: number;
}
