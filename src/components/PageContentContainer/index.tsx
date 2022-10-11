import React from "react";
import { StyledPageContentContainer } from "./styles";

export type PageContentContainerProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const PageContentContainer: React.FC<PageContentContainerProps> = (
  props
) => {
  const { className, style, children } = props;

  return (
    <StyledPageContentContainer className={className} style={style}>
      {children}
    </StyledPageContentContainer>
  );
};
