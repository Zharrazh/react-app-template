import React from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import { ITrainRecord } from "../../../features/trains/types";

export type TrainsMapProps = {
  trains: ITrainRecord[];
};
const _TrainsMap: React.FC<TrainsMapProps> = ({ trains }) => {
  return (
    <YMaps
      query={{
        ns: "use-load-option",
        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
      }}
    >
      <Map
        width={"100%"}
        height={"calc(100vh - 70px - 64px)"}
        defaultState={{
          center: [51.08, 71.26],
          zoom: 5,
          controls: ["zoomControl", "fullscreenControl"],
        }}
      >
        {trains.map((train) => {
          return (
            <Placemark
              key={train.id}
              geometry={[train.coords.lat, train.coords.lng]}
              properties={{
                balloonContentHeader: train.name,
                balloonContentBody: `
                <div style='display: flex; gap: 8px;'>
                  <span class="ant-typography ant-typography-secondary">
                    Серийный номер:
                  </span>
                  <span class='ant-typography'>${train.serial}</span>
                </div>

                <div style='display: flex; gap: 8px;'>
                  <span class="ant-typography ant-typography-secondary">
                    Кол-во секций:
                  </span>
                  <span class='ant-typography'>${train.sectionsNum}</span>
                </div>
                
                <div style='display: flex; gap: 8px;'>
                  <span class="ant-typography ant-typography-secondary">
                    Координаты:
                  </span>
                  <span class='ant-typography'>(${train.coords.lat},${train.coords.lng})</span>
                </div>
                `,
              }}
            />
          );
        })}
      </Map>
    </YMaps>
  );
};

export const TrainsMap = React.memo(_TrainsMap);
