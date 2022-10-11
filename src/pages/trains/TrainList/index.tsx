import React from "react";

import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { PageContentContainer } from "../../../components/PageContentContainer";
import { TrainListTable } from "./TrainListTable";

export const TrainListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContentContainer>
      <Card>
        <Typography.Title level={3}>Список поездов</Typography.Title>

        <TrainListTable
          items={[
            {
              id: "test",
              name: "Тестовый",
              sectionsNum: 3,
              serial: "1234",
              coords: { lat: 123.3, lng: 321.23 },
            },
          ]}
          onDeleteTrain={() => console.log("delete")}
          onEditTrain={() => navigate("create")}
        />
      </Card>
    </PageContentContainer>
  );
};
