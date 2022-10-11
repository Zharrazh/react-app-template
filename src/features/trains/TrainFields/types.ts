export interface ITrainFieldsValues {
  name: string;
  serial: string;
  sectionsNum?: number;
  coords?: {
    lat?: number;
    lng?: number;
  };
}

interface ITrainFieldsValuesValidExceptions {
  sectionsNum: number;
  coords: {
    lat: number;
    lng: number;
  };
}

export type ITrainFieldsValuesValid = Exclude<
  ITrainFieldsValues,
  ITrainFieldsValuesValidExceptions
> &
  ITrainFieldsValuesValidExceptions;
