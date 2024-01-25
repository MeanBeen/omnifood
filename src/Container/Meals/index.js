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
  Card,
} from "antd";

import React from "react";
import { PrimaryText, PrimaryTitle, SecondryTitle } from "../../globalStyles";
import Cards from "../../Components/Cards";
import { Diet } from "../../utils/constant";

const { Content } = Layout;
const { Meta } = Card;
const { Text, Title } = Typography;

export const Meals = () => {
  return (
    <Content>
      <Space direction="vertical" size={50} style={{ display: "flex" }}>
        <Row justify={"center"}>
          <PrimaryText>Meals</PrimaryText>
        </Row>
        <Row justify={"center"}>
          <PrimaryTitle>Omnifood AI chooses from 5,000+ recipes</PrimaryTitle>
        </Row>
        <Row justify={"space-evenly"}>
          <Col>
            <Cards
              src="https://omnifood.dev/img/meals/meal-1.jpg"
              text="VEGETARIAN"
              text2={false}
              calories={"650"}
              title="Japanese Gyozas"
            />
          </Col>
          <Col>
            <Cards
              src="https://omnifood.dev/img/meals/meal-2.jpg"
              text="VEGAN"
              calories={"400"}
              text2="PAELO"
              title="Avocado Salad"
            />
          </Col>
          <Col>
            <Row>
              <SecondryTitle>Works with any diet:</SecondryTitle>
            </Row>
            {Diet.map((data) => (
              <Row>
                <Title style={{ margin: 10 }} level={5}>
                  ✔️{data}
                </Title>
              </Row>
            ))}
          </Col>
        </Row>

        <Row justify={"center"}>
          <PrimaryText>See all recipes ➡️</PrimaryText>
        </Row>
      </Space>
    </Content>
  );
};
