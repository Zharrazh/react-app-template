import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

export type BackPrevPageLinkProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  to: string;
};

export const BackPrevPageLink: React.FC<BackPrevPageLinkProps> = (props) => {
  const { className, style, children, to } = props;

  return (
    <Link className={className} style={style} to={to}>
      <Typography.Link>
        <LeftOutlined />
        {children}
      </Typography.Link>
    </Link>
  );
};
