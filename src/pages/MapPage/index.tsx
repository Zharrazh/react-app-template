import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectTrainList } from "../../features/trains/trainsSlice";
import { TrainsMap } from "./TrainsMap";

export const MapPage: React.FC = () => {
  const trains = useAppSelector(selectTrainList);

  return <TrainsMap trains={trains} />;
};
