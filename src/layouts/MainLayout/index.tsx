import { Layout, Menu, Typography } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { StyledLayout } from "./styles";

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  const menuItems: ItemType[] = [
    {
      key: "trains",
      label: "Поезда",
      onClick: () => navigate("/trains"),
    },
    {
      key: "map",
      label: "Карта",
      onClick: () => navigate("/map"),
    },
  ];

  return (
    <StyledLayout>
      <Layout.Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={["trains"]}
          items={menuItems}
        />
      </Layout.Header>

      <Layout.Content>
        <Outlet />
      </Layout.Content>

      <Layout.Footer>
        Github repo:{" "}
        <Typography.Link
          href="https://github.com/Zharrazh/train-control-client"
          target={"_blank"}
        >
          Открыть в новой вкладке
        </Typography.Link>
      </Layout.Footer>
    </StyledLayout>
  );
};
