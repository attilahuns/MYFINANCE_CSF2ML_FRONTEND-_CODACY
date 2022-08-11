import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";

export interface Document {
  documentType: string;
  date: string;
  financeProduct: string;
  contract: string;
  vehicle: string;
  registrationNumber: string;
  download: string;
  view: string;
}

export interface DocumentMetadata {
  title: string;
  viewLessLabel: string;
  viewMoreLabel: string;
  displayedRowsLimit: number;
  emptyDocumentListMessage: string;
  documentListNotFound: string;
  downloadCTALabel: string;
  tableMetadata: DocumentMetadataTable;
  communicationMetadata?: CommunicationMetadata
}

export interface DocumentMetadataTable {
  documentTypeLabel: string;
  dateLabel: string;
  financeProductLabel: string;
  contractLabel: string;
  vehicleLabel: string;
  registrationNumberLabel: string;
  downloadColumn: {
    label: string,
    picto: string,
    alt: string
  };
  viewColumn: {
    label: string,
    picto: string,
    alt: string
  };
}
