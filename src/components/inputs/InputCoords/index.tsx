import { InputNumberProps } from "antd";
import React from "react";
import { StyledInputCoords, StyledInputNumber } from "./styles";

export type InputCoordsValue = {
  lat?: number;
  lng?: number;
};

export type InputCoordsProps = {
  className?: string;
  style?: React.CSSProperties;
  value?: InputCoordsValue;
  onChange?: (value: InputCoordsValue) => void;
};

export const InputCoords: React.FC<InputCoordsProps> = (props) => {
  const { className, style, value, onChange } = props;

  const onChangeLatHandler: InputNumberProps["onChange"] = onChange
    ? (inputValue) => {
        const lat = inputValue !== null ? Number(inputValue) : undefined;
        onChange({ ...value, lat });
      }
    : undefined;

  const onChangeLngHandler: InputNumberProps["onChange"] = onChange
    ? (inputValue) => {
        const lng = inputValue !== null ? Number(inputValue) : undefined;
        onChange({ ...value, lng });
      }
    : undefined;

  return (
    <StyledInputCoords className={className} style={style}>
      <StyledInputNumber value={value?.lat} onChange={onChangeLatHandler} />
      <StyledInputNumber value={value?.lng} onChange={onChangeLngHandler} />
    </StyledInputCoords>
  );
};
