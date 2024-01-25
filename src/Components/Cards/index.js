import React from "react";
import { Card, Typography, Layout, Image, Row } from "antd";
import { PrimaryText } from "../../globalStyles";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Cards = (props) => {
  return (
    <Content>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <Image preview={false} height={200} alt="example" src={props.src} />
        }
      >
        <Row>
          <Text
            style={{
              fontWeight: "bold",
              backgroundColor: "#51cf66",
              borderRadius: "100px",
              padding: "3px 6px",
              marginBottom: 0,
            }}
          >
            {props.text}
          </Text>
          {props.text2 && (
            <Text
              style={{
                fontWeight: "bold",
                backgroundColor: "#ffd43b",
                borderRadius: "100px",
                padding: "3px 6px",
                marginBottom: 0,
              }}
            >
              {props.text2}
            </Text>
          )}
        </Row>
        <Row>
          <Title style={{ fontSize: "30px" }}>{props.title}</Title>
        </Row>
        <Row>
          <PrimaryText>
            🔥 {props.calories}{" "}
            <span style={{ color: "black", fontWeight: "normal" }}>
              calories
            </span>
          </PrimaryText>
        </Row>
        <Row>
          <PrimaryText>
            🍴
            <span style={{ color: "black", fontWeight: "normal" }}>
              NutriScore ®️
            </span>{" "}
            74
          </PrimaryText>
        </Row>
        <Row>
          <PrimaryText>
            ⭐ 4.9{" "}
            <span style={{ color: "black", fontWeight: "normal" }}>
              rating (537)
            </span>
          </PrimaryText>
        </Row>
      </Card>
    </Content>
  );
};

export default Cards;
