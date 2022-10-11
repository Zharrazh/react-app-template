import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../app/store";
import { ITrainCreateRecord, ITrainRecord, ITrainUpdateRecord } from "./types";

export interface ITrainsSliceState {
  trainsList: ITrainRecord[];
}

const initialState: ITrainsSliceState = {
  trainsList: [],
};

export const trainsSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {
    createTrain: (state, action: PayloadAction<ITrainCreateRecord>) => {
      const id = uuidv4();
      state.trainsList.push({
        id,
        ...action.payload,
      });
    },
    updateTrain: (state, action: PayloadAction<ITrainUpdateRecord>) => {
      const updatedTrainIndex = state.trainsList.findIndex(
        (train) => train.id === action.payload.id
      );

      state.trainsList[updatedTrainIndex] = action.payload;
    },
    deleteTrain: (state, action: PayloadAction<{ id: string }>) => {
      state.trainsList = state.trainsList.filter(
        (train) => train.id !== action.payload.id
      );
    },
  },
});

export const { createTrain, updateTrain, deleteTrain } = trainsSlice.actions;

export const selectTrainList = (state: RootState) => state.trains.trainsList;
export const getSelectTrainById = (id: string) => (state: RootState) =>
  state.trains.trainsList.find((train) => train.id === id);

export default trainsSlice.reducer;
