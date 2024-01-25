import React from "react";

import { Layout, Row, Col, Typography } from "antd";
import { StyledBox, StyledBox2, StyledImage2 } from "./style";
import {
  PrimaryText,
  PrimaryTitle,
  SecondryText,
  SecondryTitle,
} from "../../globalStyles";

const { Content } = Layout;
const { Text, Title } = Typography;

export const Steps = () => {
  return (
    <Content>
      <Content style={{ width: "80%", margin: "auto" }}>
        <Row>
          <PrimaryText>HOW IT WORKS</PrimaryText>
        </Row>
        <PrimaryTitle>Your daily dose of health in 3 simple steps</PrimaryTitle>
        <Content style={{ position: "relative", marginTop: 100 }}>
          <Row justify={"space-between"}>
            <Col span={12}>
              <Text style={{ fontSize: 80, fontWeight: 800, opacity: "50%" }}>
                01
              </Text>
              <SecondryTitle>
                Tell us what you like (and what not)
              </SecondryTitle>
              <SecondryText>
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </SecondryText>
            </Col>
            <Col span={12}>
              <Row justify={"center"}>
                <StyledImage2
                  preview={false}
                  width={200}
                  src="https://omnifood.dev/img/app/app-screen-1.png"
                />
                <StyledBox></StyledBox>
                <StyledBox2></StyledBox2>
              </Row>
            </Col>
          </Row>
          <Row justify={"space-between"}>
            <Col span={12}>
              <Row justify={"center"}>
                <StyledImage2
                  preview={false}
                  width={200}
                  src="https://omnifood.dev/img/app/app-screen-2.png"
                />
                <StyledBox></StyledBox>
                <StyledBox2></StyledBox2>
              </Row>
            </Col>
            <Col span={12}>
              <Text style={{ fontSize: 80, fontWeight: 800, opacity: "50%" }}>
                02
              </Text>
              <SecondryTitle>Approve your weekly meal plan</SecondryTitle>
              <SecondryText>
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </SecondryText>
            </Col>
          </Row>
          <Row justify={"space-between"}>
            <Col span={12}>
              <Text style={{ fontSize: 80, fontWeight: 800, opacity: "50%" }}>
                03
              </Text>
              <SecondryTitle>Receive meals at convenient time</SecondryTitle>
              <SecondryText>
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </SecondryText>
            </Col>
            <Col span={12}>
              <Row justify={"center"}>
                <StyledImage2
                  preview={false}
                  width={200}
                  src="https://omnifood.dev/img/app/app-screen-3.png"
                />
                <StyledBox></StyledBox>
                <StyledBox2></StyledBox2>
              </Row>
            </Col>
          </Row>
        </Content>
      </Content>
    </Content>
  );
};
