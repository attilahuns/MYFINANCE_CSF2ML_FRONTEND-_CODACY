export interface Information {
  title: string,
  data: InformationData[],
}

export interface InformationData {
  label: string,
  value: string,
  isSecrect?: boolean,
}
