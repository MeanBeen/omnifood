import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

const GlobalStyle = createGlobalStyle`
  body,html {
    
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik;
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: #fd7e14;
  color: white;
  padding: 5px 25px;
  border-radius: 9px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-family: Rubik;
  height: 20%;
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #ffa94d;
    border-color: #ffa94d;
  }
`;

export const PrimaryTitle = styled(Title)`
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-typography,
  div:where(.css-dev-only-do-not-override-dkbvqv).ant-typography-h1,
  div:where(.css-dev-only-do-not-override-dkbvqv).ant-typography-h1 > textarea,
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-typography h1 {
    font-weight: 800;
    font-size: 48;
    font-family: Rubik;
    color: #343a40;
  }
`;

export const SecondryTitle = styled(Title)`
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-typography,
  div:where(.css-dev-only-do-not-override-dkbvqv).ant-typography-h1,
  div:where(.css-dev-only-do-not-override-dkbvqv).ant-typography-h1 > textarea,
  &:where(.css-dev-only-do-not-override-dkbvqv).ant-typography h1 {
    margin-top: 0;
    font-size: 30px;
    font-weight: 800;
    font-family: Rubik;
    opacity: 85%;
  }
`;

export const PrimaryText = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  color: #d9480f;
  font-family: Rubik;
`;

export const SecondryText = styled(Text)`
  margin-top: "6%";
  color: #495057;
  font-weight: 600;
  font-size: 17px;
  font-family: Rubik;
`;

export default GlobalStyle;
