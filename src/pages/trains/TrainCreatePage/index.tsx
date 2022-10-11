import React from "react";

import { Card, Typography } from "antd";
import { BackPrevPageLink } from "../../../components/BackPrevPageLink";
import { PageContentContainer } from "../../../components/PageContentContainer";

export const TrainCreatePage: React.FC = () => {
  return (
    <PageContentContainer>
      <Card>
        <BackPrevPageLink to="/trains">Назад к списку поездов</BackPrevPageLink>

        <Typography.Title level={3}>Создание поезда</Typography.Title>
      </Card>
    </PageContentContainer>
  );
};
