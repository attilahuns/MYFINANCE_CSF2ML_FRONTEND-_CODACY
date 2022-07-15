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
