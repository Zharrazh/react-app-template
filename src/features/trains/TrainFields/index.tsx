import { Col, Form, Input, InputNumber, Row } from "antd";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { InputCoords } from "../../../components/inputs/InputCoords";
import { ITrainFieldsValues } from "./types";

export const TrainFields: React.FC = () => {
  const { control } = useFormContext<ITrainFieldsValues>();

  return (
    <Form layout="vertical">
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => {
          return (
            <Form.Item
              label={"Наименование"}
              help={error?.message}
              validateStatus={error && "error"}
            >
              <Input {...field} />
            </Form.Item>
          );
        }}
      />

      <Row gutter={16}>
        <Col span={18}>
          <Controller
            name="serial"
            control={control}
            render={({ field, fieldState: { error } }) => {
              return (
                <Form.Item
                  label={"Серийный номер"}
                  help={error?.message}
                  validateStatus={error && "error"}
                >
                  <Input {...field} />
                </Form.Item>
              );
            }}
          />
        </Col>
        <Col span={6}>
          <Controller
            name="sectionsNum"
            control={control}
            render={({
              field: { ...restFieldProps },
              fieldState: { error },
            }) => {
              return (
                <Form.Item
                  label={"Кол-во секций"}
                  help={error?.message}
                  validateStatus={error && "error"}
                >
                  <InputNumber style={{ width: "100%" }} {...restFieldProps} />
                </Form.Item>
              );
            }}
          />
        </Col>
      </Row>

      <Controller
        control={control}
        name="coords"
        render={({
          field: { ref: _, ...restFieldProps },
          fieldState: { error },
        }) => {
          return (
            <Form.Item
              label={"Координаты"}
              help={error?.message}
              validateStatus={error && "error"}
            >
              <InputCoords {...restFieldProps} />
            </Form.Item>
          );
        }}
      />
    </Form>
  );
};
