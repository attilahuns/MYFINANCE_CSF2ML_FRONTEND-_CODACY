import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";

export enum RequestStatus {
  IN_PROGRESS = 'In Progress',
  CANCELED = 'Canceled',
  COMPLETED = 'Completed',
}
export interface Request {
  request: string;
  details: string;
  status: RequestStatus;
  date: string;
}

export interface RequestMetadata {
  title: string;
  ctaNewRequest: {
    label: string;
    url: string;
  },
  requestsLabel: string;
  requestDetailsLabel: string;
  statusLabel: string;
  dateSubmittedLabel: string;
  viewLessLabel: string;
  viewMoreLabel: string;
  displayedRowsLimit: number;
  emptyRequestListMessage: string;
  emptyListMessage: string;
  communicationMetadata: CommunicationMetadata;
}

export interface RequestForm {
  id: number;
  title: string;
}
