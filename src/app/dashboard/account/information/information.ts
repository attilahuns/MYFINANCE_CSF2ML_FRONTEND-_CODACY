import { CommunicationMetadata } from "src/app/shared/communication-tile/communication";
import { FaqMetadata } from "src/app/shared/faq-tile/faq-tile";

export interface Information {
  title: string,
  data: InformationItem[],
}

export interface InformationItem {
  label: string,
  value: string,
  isSecrect?: boolean,
}

export interface InformationData {
  firstname: string;
  lastname: string;
  address: string;
  country: string;
  drivingLicence: string;
  passport: string;
  idCard: string;
  phoneNumber: string;
  email: string;
}

export interface InformationMetadata {
  title: string;
  generalInformation: {
    title: string,
    firstnameLabel: string,
    lastnameLabel: string,
    addressLabel: string,
    countryLabel: string,
    drivingLicenceLabel: string,
    passportLabel: string,
    idCardLabel: string
  },
  contactInformation: {
    title: string,
    phoneNumberLabel: string,
    emailLabel: string,
  },
  updateInformation: string,
  communicationMetadata?: CommunicationMetadata,
  faqMetadata?: FaqMetadata;
}
