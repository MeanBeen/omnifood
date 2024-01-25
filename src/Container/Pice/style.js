import styled from "styled-components";
import { SecondryText } from "../../globalStyles";
import { Card } from "antd";

export const SecondryText2 = styled(SecondryText)`
  position: absolute;
  top: 6%;
  transform: rotate(45deg);
  right: -10%;
  background-color: rgb(255, 212, 59);
  padding: 5px 40px;
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-card-bordered {
    border: 1px solid #f0f0f0;
    overflow: hidden;
  }
`;
export const StyledCard = styled(Card)`
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-card-bordered {
    border: 1px solid #f0f0f0;
    overflow: hidden;
  }
`;
