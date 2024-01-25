import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledContent = styled(Content)`
  min-height: 400px;
  border-radius: 10px;
  background-image: linear-gradient(
      to right bottom,
      rgba(235, 151, 78, 0.35),
      rgba(230, 125, 34, 0.35)
    ),
    url("https://omnifood.dev/img/eating.jpg");
  background-size: cover;
  background-position: center;
`;
