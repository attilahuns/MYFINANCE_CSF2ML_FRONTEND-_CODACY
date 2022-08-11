import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";

export interface Payment {
  dueAmount: string;
  status: string;
  dueDate: string;
  View: string;
}

export interface PaymentMetadata {
  title: string,
  downloadBtnLabel: string,
  tableMetadata: PaymentMetadataTable,
  communicationMetadata: CommunicationMetadata
}

export interface PaymentMetadataTable {
  dueAmountLabel: string,
  statusLabel: string,
  dueDatelabelLabel: string,
  viewColumn: {
    label: string,
    icon: string,
    alt: string
  },
  viewLessLabel: string,
  viewMoreLabel: string,
  displayedRowsLimit: number
}
