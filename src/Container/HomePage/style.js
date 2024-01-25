import styled from "styled-components";
import { Popover, Button, Image, Layout } from "antd";
import { StyledButton } from "../../App/Navbar/style";
import { PrimaryButton } from "../../globalStyles";

const { Content } = Layout;

export const StyledPopover = styled(Popover)`
  border: none;
  box-shadow: none;
  background-color: white;
  padding: 12px 30px;
  text-align: center;
  font-weight: 600;
  height: 20%;
  font-size: 18px;

  transition: all 0.8s;

  &:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #ffa94d;
    border-color: #ffa94d;
  }
`;

export const NewStyledButton = styled(PrimaryButton)`
  padding: 10px 30px;
`;

export const StyledImage = styled(Image)`
  filter: brightness(0);
  opacity: 50%;
`;
