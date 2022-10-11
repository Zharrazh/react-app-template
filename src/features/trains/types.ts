export interface ITrainRecord {
  id: string;
  name: string;
  serial: string;
  sectionsNum: number;
  coords: {
    lat: number;
    lng: number;
  };
}

export type ITrainCreateRecord = Omit<ITrainRecord, "id">;

export type ITrainUpdateRecord = ITrainRecord;
