import { Layout, Menu, Typography } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { StyledContent, StyledLayout } from './styles';
import { getSelectedMenuKey } from './utils';

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const menuItems: ItemType[] = [
    {
      key: 'trains',
      label: 'Поезда',
      onClick: () => navigate('/trains'),
    },
    {
      key: 'map',
      label: 'Карта',
      onClick: () => navigate('/map'),
    },
  ];

  const selectedMenuKey = getSelectedMenuKey(pathname);

  return (
    <StyledLayout>
      <Layout.Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedMenuKey ? [selectedMenuKey] : []}
          items={menuItems}
        />
      </Layout.Header>

      <StyledContent>
        <Outlet />
      </StyledContent>

      <Layout.Footer>
        Github repo:{' '}
        <Typography.Link
          href="https://github.com/Zharrazh/train-control-client"
          target={'_blank'}>
          Открыть в новой вкладке
        </Typography.Link>
      </Layout.Footer>
    </StyledLayout>
  );
};
