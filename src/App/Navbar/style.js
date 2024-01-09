import styled from "styled-components";
import { Popover, Button } from "antd";

export const StyledPopover = styled(Popover)`
  border: none;
  box-shadow: none;
  background-color: #fdf2e9;
  padding: 5px;
  font-weight: 600;
  font-size: 18px;
  transition: all 0.8s;
  margin-right: 30px;
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #ffa94d;
    border-color: #ffa94d;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #fd7e14;
  color: white;
  padding: 5px 30px;
  border-radius: 9px;
  font-size: 20px;
  text-align: center;
  height: 20%;
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #ffa94d;
    border-color: #ffa94d;
  }
`;
