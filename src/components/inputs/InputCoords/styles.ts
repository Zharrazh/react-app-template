import { InputNumber } from "antd";
import styled from "styled-components";

export const StyledInputCoords = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledCoordsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledInputNumber = styled(InputNumber)`
  flex: 1;
`;
