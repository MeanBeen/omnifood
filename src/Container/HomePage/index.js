import React from "react";
import {
  Layout,
  Typography,
  Row,
  Col,
  Popover,
  Button,
  Image,
  Space,
  Avatar,
} from "antd";
import { NewStyledButton, StyledPopover, StyledImage } from "./style";
import { AvatarData, LogoData } from "../../utils/constant";
import { Steps } from "../../Components/Steps";
import { PrimaryTitle, SecondryText } from "../../globalStyles";
import { Meals } from "../Meals";
import Testimonials from "../Testimonials";
import Pricing from "../Pice";
import { Foot } from "../Footer";
import Contact from "../Contact";
const { Title, Text } = Typography;
const { Content } = Layout;

const HomePage = () => {
  return (
    <Content>
      <Content style={{ minHeight: "100vh", marginBottom: 50 }}>
        <Row
          align={"top"}
          justify="space-evenly"
          style={{ background: "#fdf2e9", padding: "5% 10%" }}
        >
          <Col style={{ width: "35%" }}>
            <PrimaryTitle>
              A healthy meal delivered to your door, every single day
            </PrimaryTitle>
            <Row>
              <SecondryText>
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </SecondryText>
            </Row>
            <Space style={{ marginTop: 25 }} align="end" size={"large"}>
              <Popover>
                <NewStyledButton>Start eating well</NewStyledButton>
              </Popover>
              <StyledPopover>
                <Button>Learn more ↓</Button>
              </StyledPopover>
            </Space>
            <Row style={{ marginTop: "10%" }} justify={"space-between"}>
              <Avatar.Group size="large">
                {AvatarData.map((data) => (
                  <Avatar src={data.imageUrl} />
                ))}
              </Avatar.Group>

              <Text style={{ fontWeight: 600, fontSize: 21 }} level={5}>
                <span style={{ color: "#d9480f" }}>250,000+</span> meals
                delivered last year!
              </Text>
            </Row>
          </Col>
          <Col>
            <Image
              preview={false}
              width={550}
              src="https://omnifood.dev/img/hero.webp"
            />
          </Col>
        </Row>
        <Row justify={"center"}>
          <Title style={{ opacity: "50%" }} level={5}>
            AS FEATURED IN
          </Title>
        </Row>

        <Row justify={"space-evenly"}>
          {LogoData.map((data) => (
            <StyledImage
              preview={false}
              width={data.width}
              src={data.imageUrl}
            />
          ))}
        </Row>
      </Content>
      <Space direction="vertical" size={100} style={{ display: "flex" }}>
        <Steps />

        <Meals />

        <Testimonials />

        <Pricing />

        <Contact />

        <Foot />
      </Space>
    </Content>
  );
};

export default HomePage;
