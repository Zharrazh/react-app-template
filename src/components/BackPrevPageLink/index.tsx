import { LeftOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

import { StyledBackPrevPageLink } from './styles';

export type BackPrevPageLinkProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  to: string;
};

export const BackPrevPageLink: React.FC<BackPrevPageLinkProps> = (props) => {
  const { className, style, children, to } = props;

  const x = 1;

  return (
    <StyledBackPrevPageLink className={className} style={style} to={to}>
      <Space align="center">
        <LeftOutlined />
        {children}
      </Space>
    </StyledBackPrevPageLink>
  );
};
