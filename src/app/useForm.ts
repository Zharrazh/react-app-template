import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback } from "react";
import {
  DeepPartial,
  FieldValues,
  useForm as useFormRHF,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";

export type TOnSubmitFormAsyncCb<TSuccessFormValues> = (
  values: TSuccessFormValues
) => Promise<void>;

export type TOnSubmitFormSyncCb<TSuccessFormValues> = (
  values: TSuccessFormValues
) => void;

export type TOnSubmitFormCb<TSuccessFormValues> =
  | TOnSubmitFormAsyncCb<TSuccessFormValues>
  | TOnSubmitFormSyncCb<TSuccessFormValues>;

export interface IUseFormOptions<TFormValues, TSuccessFormValues> {
  validateFormSchema?: AnyObjectSchema;
  onSubmit?: TOnSubmitFormCb<TSuccessFormValues>;
  defaultValues: DeepPartial<TFormValues>;
}

export const useForm = <
  TFormValues extends FieldValues,
  TSuccessFormValues = TFormValues
>(
  options: IUseFormOptions<TFormValues, TSuccessFormValues>
) => {
  const { onSubmit, validateFormSchema, defaultValues } = options;

  const [isSubmitLoading, setIsSubmitLoading] = React.useState(false);

  const form = useFormRHF<TFormValues>({
    resolver: validateFormSchema ? yupResolver(validateFormSchema) : undefined,
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const submit = onSubmit
    ? form.handleSubmit(async (data) => {
        if (onSubmit instanceof Promise<void>) {
          try {
            setIsSubmitLoading(true);

            onSubmit(data as unknown as TSuccessFormValues);
          } finally {
            setIsSubmitLoading(false);
          }
        } else {
          onSubmit(data as unknown as TSuccessFormValues);
        }
      })
    : undefined;

  const formReset = form.reset;
  const reset = useCallback(() => {
    formReset();
  }, [formReset]);

  return {
    form,
    submit,
    reset,
    isSubmitLoading,
  };
};
