import { Button } from "antd";
import React from "react";
import { FormProvider } from "react-hook-form";
import { TOnSubmitFormCb, useForm } from "../../../../app/useForm";
import { TrainFields } from "../../../../features/trains/TrainFields";
import {
  ITrainFieldsValues,
  ITrainFieldsValuesValid,
} from "../../../../features/trains/TrainFields/types";
import { trainFieldsValidationSchema } from "../../../../features/trains/TrainFields/utils";

export type TrainEditFormProps = {
  initialValues: ITrainFieldsValues;
  onSubmit: TOnSubmitFormCb<ITrainFieldsValuesValid>;
};

export const TrainEditForm: React.FC<TrainEditFormProps> = (props) => {
  const { initialValues, onSubmit } = props;

  const { form, submit, isSubmitLoading } = useForm<
    ITrainFieldsValues,
    ITrainFieldsValuesValid
  >({
    defaultValues: initialValues,
    validateFormSchema: trainFieldsValidationSchema,
    onSubmit,
  });

  return (
    <div>
      <FormProvider {...form}>
        <TrainFields />
      </FormProvider>
      <Button
        onClick={submit}
        loading={isSubmitLoading}
        disabled={!form.formState.isDirty}
      >
        Сохранить изменения
      </Button>
    </div>
  );
};
