import styled from "styled-components";
import { Popover, Button, Image, Layout } from "antd";

const { Content } = Layout;

export const StyledBox = styled(Content)`
  width: 40%;

  padding-bottom: 40%;
  background-color: #fff4e6;
  display: block;
  z-index: -2;
  top: 5%;
  border-radius: 50%;
  position: absolute;
`;

export const StyledBox2 = styled(Content)`
  display: block;

  width: 35%;
  /* transform: translate(-50%, -50%); */
  padding-bottom: 35%;
  background-color: #ffe8cc;
  z-index: -1;
  border-radius: 50%;
  position: absolute;
  top: 10%;
`;

export const StyledImage2 = styled(Image)`
  position: relative;
`;
