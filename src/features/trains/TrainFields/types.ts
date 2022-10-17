export interface ITrainFieldsValues {
  name: string;
  serial: string;
  sectionsNum?: number;
}

interface ITrainFieldsValuesValidExceptions {
  sectionsNum: number;
}

export type ITrainFieldsValuesValid = Exclude<
  ITrainFieldsValues,
  ITrainFieldsValuesValidExceptions
> &
  ITrainFieldsValuesValidExceptions;
