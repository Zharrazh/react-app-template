import * as yup from 'yup';

import { AnyObjectShape } from '../../../utils/validation/types';

import { ITrainFieldsValues } from './types';

export const DEFAULT_TRAIN_FIELDS_VALUES: ITrainFieldsValues = {
  name: '',
  serial: '',
};

export const trainFieldsValidationSchema = yup
  .object<AnyObjectShape<ITrainFieldsValues>>({
    name: yup.string().required('Необходимо заполнить наименование'),
    serial: yup.string().required('Необходимо заполнить серийный номер'),
    sectionsNum: yup
      .number()
      .required('Необходимо заполнить количество секций'),
  })
  .required();
