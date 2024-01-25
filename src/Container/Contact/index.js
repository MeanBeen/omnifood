import React from "react";

import { Layout, Typography, Card, Row, Input, Select, Col, Image } from "antd";
import {
  PrimaryButton,
  PrimaryTitle,
  SecondryText,
  SecondryTitle,
} from "../../globalStyles";
import { StyledContent } from "./style";

const { Content } = Layout;
const { Meta } = Card;

const Contact = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Content
      style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row
        style={{ background: "orange", borderRadius: "10px" }}
        justify={"center"}
        align={"middle"}
      >
        <Col style={{ padding: 20 }} span={16}>
          <PrimaryTitle>Get your first meal for free!</PrimaryTitle>
          <SecondryText style={{ fontWeight: "normal" }}>
            Healthy, tasty and hassle-free meals are waiting for you. Start
            eating well today. You can cancel or pause anytime. And the first
            meal is on us!
          </SecondryText>
          <Row gutter={[25, 25]}>
            <Col span={12}>
              <SecondryTitle style={{ fontSize: "20px" }}>
                Full Name
              </SecondryTitle>
              <Input style={{ width: "80%" }} size="large" placeholder="Name" />
            </Col>
            <Col span={12}>
              <SecondryTitle style={{ fontSize: "20px" }}>
                Email Address
              </SecondryTitle>
              <Input
                style={{ width: "80%" }}
                size="large"
                placeholder="Email"
              />
            </Col>
            <Col span={12}>
              <SecondryTitle style={{ fontSize: "20px" }}>
                Where did you hear from us?
              </SecondryTitle>
              <Select
                defaultValue="Please Choose One Option"
                style={{
                  width: 220,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Podcast",
                  },
                  {
                    value: "lucy",
                    label: "Faceook",
                  },
                  {
                    value: "Yiminghe",
                    label: "Youtube",
                  },
                ]}
              />
            </Col>
            <Col span={12}>
              <PrimaryButton
                style={{ marginTop: "10px", height: "90%", width: "60%" }}
              >
                SignUp Now
              </PrimaryButton>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <StyledContent />
        </Col>
      </Row>
    </Content>
  );
};

export default Contact;
