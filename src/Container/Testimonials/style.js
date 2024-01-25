import styled from "styled-components";

import { Image } from "antd";

export const StyledImageFood = styled(Image)`
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  overflow: hidden !important;
  transition: all 0.5s;
`;
