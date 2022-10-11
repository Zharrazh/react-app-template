import React from "react";

import { Card, notification, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { BackPrevPageLink } from "../../../components/BackPrevPageLink";
import { PageContentContainer } from "../../../components/PageContentContainer";
import {
  getSelectTrainById,
  updateTrain,
} from "../../../features/trains/trainsSlice";
import { TrainEditForm, TrainEditFormProps } from "./TrainEditForm";

export const TrainEditPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const params = useParams();

  const editedTrain = useAppSelector(getSelectTrainById(params.id!));

  const onSubmitHandler: TrainEditFormProps["onSubmit"] = (values) => {
    if (editedTrain) {
      dispatch(updateTrain({ id: editedTrain.id, ...values }));
      notification.success({
        message: `Поезд "${editedTrain.name}" успешно изменен`,
      });
      navigate("/trains");
    }
  };

  return (
    <PageContentContainer>
      <Card>
        <BackPrevPageLink to="/trains">Назад к списку поездов</BackPrevPageLink>

        {editedTrain ? (
          <>
            <Typography.Title level={3}>
              Изменение поезда ({editedTrain.name})
            </Typography.Title>

            <TrainEditForm
              initialValues={editedTrain}
              onSubmit={onSubmitHandler}
            />
          </>
        ) : (
          <Typography.Paragraph>
            Не удалось найти поезд. Возможно он был удален
          </Typography.Paragraph>
        )}
      </Card>
    </PageContentContainer>
  );
};
