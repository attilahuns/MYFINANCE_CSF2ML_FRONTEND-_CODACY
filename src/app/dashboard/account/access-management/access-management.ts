import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

export interface AccessManagement {
  id: number,
  name: string,
  firstName: string,
  nif: string,
  phone: string,
  email: string,
}

export interface AccessManagementMetadata {
  title: string,
  accessQuestionLabel: string,
  newAccess: {
    label: string,
    grantAccessTooltipLabel: string,
    maxAccessExceededTooltipLabel: string
  },
  popUp: PopUp
  accessWarningLabel: string,
  updateAccessLabel: string,
  noAccessToDisplayLabel: string,
  maxAccessExceededLabel: string,
  tableMetadata: AccessManagementMetadataTable,
  communicationMetadata?: CommunicationMetadata,
  faqMetadata?: FaqMetadata;
}

interface AccessManagementMetadataTable {
    nameLabel: string,
    firstnameLabel: string,
    nifLabel: string,
    phoneLabel: string,
    emailLabel: string,
    actionsLabel: string,
    viewMoreLabel: string,
    viewLessLabel: string,
    maxAccessNumber: number,
    editIcon: string,
    deleteIcon: string,
    validateIcon: string,
    discardIcon: string
}

export interface PopUp {
  message: string,
  confirmButtonLabel: string,
  cancelButtonLabel: string
}
