export interface Homepage {
  agreements: Agreement[],
  documents: Document[],
  requests: Request[],
}
export interface Agreement {
  brand: string,
  model: string,
  image: string,
  vin: string,
  agreementNumber: string;
  financialProduct: string;
}
export interface Document {
  agreementNumber: string;
}
export enum RequestStatus {
  IN_PROGRESS = 'In Progress',
  CANCELED = 'Canceled',
  COMPLETED = 'Completed',
}
export interface Request {
  title: string,
  description: string,
  status: RequestStatus;
}

export interface HomepageMetada {
  title: string,
  message: string,
  agreementMetada: AgreementMetadata,
  documentMetada: DocumentMetadata,
  requestMetada: RequestMetadata,
  manageableContentMetada: ManageableContentMetadata,
}
export interface AgreementMetadata {
  title: string,
  vinLabel: string,
  agreementNumberLabel: string,
  financialProductLabel: string,
}
export interface DocumentMetadata {
  title: string,
  viewIcon: string,
}
export interface RequestMetadata {
  title: string,
}
export interface ManageableContentMetadata {
  title: string,
  description?: string,
  videoUrl?: string,
  link?: {
    label: string,
    url: string,
  },
  pdf?: {
    label: string,
    url: string,
  },
  image?: {
    url: string,
    alt: string,
  },
  cta?: {
    label: string,
    url: string,
  }
}
