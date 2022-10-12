import { InputNumberProps } from "antd";
import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {
  StyledCoordsContainer,
  StyledInputCoords,
  StyledInputNumber,
} from "./styles";

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

  const onClickMapHandler = onChange
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (e: any) => {
        const [lat, lng] = e.get("coords");

        onChange({ lat, lng });
      }
    : undefined;

  return (
    <StyledInputCoords className={className} style={style}>
      <StyledCoordsContainer>
        <StyledInputNumber value={value?.lat} onChange={onChangeLatHandler} />
        <StyledInputNumber value={value?.lng} onChange={onChangeLngHandler} />
      </StyledCoordsContainer>

      <YMaps
        query={{
          ns: "use-load-option",
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <Map
          width={"100%"}
          height={400}
          defaultState={{
            center: [51.08, 71.26],
            zoom: 5,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          onClick={onClickMapHandler}
        >
          {value && value.lat && value.lng && (
            <Placemark geometry={[value.lat, value.lng]} />
          )}
        </Map>
      </YMaps>
    </StyledInputCoords>
  );
};
