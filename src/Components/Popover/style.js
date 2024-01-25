import styled from "styled-components";
import { Popover } from "antd";

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
