import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

export interface AccessManagement {
  id: number,
  name: string,
  firstName: string,
  role: string,
  phone: string,
  email: string,
}

export interface AccessManagementMetadata {
  title: string,
  accessQuestionLabel: string,
  newAccessLabel: string,
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
    roleLabel: string,
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
