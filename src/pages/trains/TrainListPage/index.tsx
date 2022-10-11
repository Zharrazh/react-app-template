import React from "react";
import { Button, Card, Divider, notification, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PageContentContainer } from "../../../components/PageContentContainer";
import { TrainListTable, TrainListTableProps } from "./TrainListTable";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  deleteTrain,
  selectTrainList,
} from "../../../features/trains/trainsSlice";

export const TrainListPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const trainList = useAppSelector(selectTrainList);

  const onEditTrainHandler: TrainListTableProps["onEditTrain"] = (record) => {
    navigate(`edit/${record.id}`);
  };

  const onDeleteTrainHandler: TrainListTableProps["onDeleteTrain"] = (
    record
  ) => {
    dispatch(deleteTrain({ id: record.id }));
    notification.success({ message: `Поезд "${record.name}" успешно удален"` });
  };

  return (
    <PageContentContainer>
      <Card>
        <Typography.Title level={3}>Список поездов</Typography.Title>

        <Link to="create">
          <Button>Создать поезд</Button>
        </Link>
        <Divider />

        <TrainListTable
          items={trainList}
          onDeleteTrain={onDeleteTrainHandler}
          onEditTrain={onEditTrainHandler}
        />
      </Card>
    </PageContentContainer>
  );
};
