import { Button } from "antd";
import React from "react";
import { FormProvider } from "react-hook-form";
import { TOnSubmitFormCb, useForm } from "../../../../app/useForm";
import { TrainFields } from "../../../../features/trains/TrainFields";
import {
  ITrainFieldsValues,
  ITrainFieldsValuesValid,
} from "../../../../features/trains/TrainFields/types";
import {
  DEFAULT_TRAIN_FIELDS_VALUES,
  trainFieldsValidationSchema,
} from "../../../../features/trains/TrainFields/utils";

export type TrainCreateFormProps = {
  onSubmit: TOnSubmitFormCb<ITrainFieldsValuesValid>;
};

export const TrainCreateForm: React.FC<TrainCreateFormProps> = (props) => {
  const { onSubmit } = props;

  const { form, submit, isSubmitLoading } = useForm<
    ITrainFieldsValues,
    ITrainFieldsValuesValid
  >({
    defaultValues: DEFAULT_TRAIN_FIELDS_VALUES,
    validateFormSchema: trainFieldsValidationSchema,
    onSubmit,
  });

  return (
    <div>
      <FormProvider {...form}>
        <TrainFields />
      </FormProvider>
      <Button onClick={submit} loading={isSubmitLoading}>
        Создать
      </Button>
    </div>
  );
};
