import React from "react";
import { Layout, Row, Card, Typography, Space, Flex, Col } from "antd";
import {
  PrimaryButton,
  PrimaryText,
  PrimaryTitle,
  SecondryText,
  SecondryTitle,
} from "../../globalStyles";
import { SecondryText2, StyledCard } from "./style";
import { CookData } from "../../utils/constant";

import { PieChartOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Text } = Typography;

const Pricing = () => {
  return (
    <Content>
      <Row justify={"center"}>
        <PrimaryText>Pricing</PrimaryText>
      </Row>

      <Row justify={"center"}>
        <PrimaryTitle>Eating well without breaking the bank</PrimaryTitle>
      </Row>
      <Row justify={"center"}>
        <Space direction="horizontal" size={36}>
          <Card style={{ width: 400 }}>
            <Row justify={"center"}>
              <PrimaryText>STARTER</PrimaryText>
            </Row>
            <Space direction="vertical" size={36}>
              <Row justify={"center"}>
                <PrimaryTitle>$399</PrimaryTitle>
              </Row>
              <Row justify={"center"}>
                <SecondryText>
                  per month. That's just $13 per meal!
                </SecondryText>
              </Row>
              <Space direction="vertical" size={16}>
                <Text>✔️ 1 meal per day</Text>
                <Text>✔️ Order from 11am to 9pm</Text>
                <Text>✔️ Delivery is free</Text>
              </Space>
              <Row justify={"center"}>
                <PrimaryButton> Start eating well</PrimaryButton>
              </Row>
            </Space>
          </Card>

          <StyledCard style={{ width: 400, background: "#fdf2e9" }}>
            <Row justify={"center"}>
              <PrimaryText>COMPLETE</PrimaryText>
            </Row>
            <Space direction="vertical" size={36}>
              <Row justify={"center"}>
                <PrimaryTitle>$649</PrimaryTitle>
              </Row>
              <Row justify={"center"}>
                <SecondryText>
                  per month. That's just $11 per meal!
                </SecondryText>
              </Row>
              <Space direction="vertical" size={16}>
                <Text>✔️ 2 meal per day</Text>
                <Text>✔️ Order 24/7</Text>
                <Text>✔️ Delivery is free</Text>
              </Space>
              <Row justify={"center"}>
                <PrimaryButton> Start eating well</PrimaryButton>
              </Row>
            </Space>
            <SecondryText2>Best Value</SecondryText2>
          </StyledCard>
        </Space>
      </Row>
      <Row style={{ marginTop: 30 }} justify={"center"}>
        <Text>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </Text>
      </Row>

      <Space
        direction="horizontal"
        size={10}
        style={{ marginTop: "5%", marginLeft: "10%" }}
      >
        {CookData.map((data) => (
          <Col>
            {data.icon}
            <SecondryTitle>{data.text1}</SecondryTitle>

            <SecondryText
              style={{ fontWeight: "normal", display: "block", width: "40%" }}
            >
              {data.text2}
            </SecondryText>
          </Col>
        ))}
      </Space>
    </Content>
  );
};

export default Pricing;
