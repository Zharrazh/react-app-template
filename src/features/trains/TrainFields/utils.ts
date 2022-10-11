import * as yup from "yup";
import { InputCoordsValue } from "../../../components/inputs/InputCoords";
import { AnyObjectShape } from "../../../utils/validation/types";
import { ITrainFieldsValues } from "./types";

export const DEFAULT_TRAIN_FIELDS_VALUES: ITrainFieldsValues = {
  name: "",
  serial: "",
};

export const trainFieldsValidationSchema = yup
  .object<AnyObjectShape<ITrainFieldsValues>>({
    name: yup.string().required("Необходимо заполнить наименование"),
    serial: yup.string().required("Необходимо заполнить серийный номер"),
    sectionsNum: yup
      .number()
      .required("Необходимо заполнить количество секций"),
    coords: yup.object<AnyObjectShape<InputCoordsValue>>().test({
      test: (value) => {
        return value && value.lat !== undefined && value.lng !== undefined;
      },
      message: "Необходимо ввести координаты локомотива",
    }),
  })
  .required();
