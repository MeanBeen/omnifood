import React from "react";
import { Layout, Image, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { SecondryText } from "../../globalStyles";

const { Footer, Content } = Layout;
const { Text } = Typography;

export const Foot = () => {
  return (
    <Content>
      <Footer style={{ height: "30vh", background: "#fae5d3" }}>
        <Row justify={"space-evenly"}>
          <Col>
            <Space direction="vertical" size={25} style={{ display: "flex" }}>
              <Row>
                <Image
                  preview={false}
                  width={165}
                  src="https://omnifood.dev/img/omnifood-logo.png"
                />
              </Row>
              <Row>
                <InstagramOutlined style={{ fontSize: 25, marginRight: 20 }} />
                <FacebookOutlined style={{ fontSize: 25, margin: 20 }} />
                <TwitterOutlined style={{ fontSize: 25, margin: 20 }} />
              </Row>
              <Text>
                Copyright © 2024 by Omnifood, Inc. All rights reserved.
              </Text>
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={25} style={{ display: "flex" }}>
              <SecondryText>
                Contact us
                <br />
              </SecondryText>
              <Text>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
                <br />
              </Text>
              <Text>
                415-201-6370
                <br />
              </Text>
              <Text>hello@omnifood.com</Text>
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={25} style={{ display: "flex" }}>
              <SecondryText>
                Account <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Create account
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Sign in
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                iOS app
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Android app
                <br />
              </SecondryText>
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={25} style={{ display: "flex" }}>
              <SecondryText>
                Company <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                About Omnifood
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                For Business
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Cooking partners
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Carrers
                <br />
              </SecondryText>
            </Space>
          </Col>
          <Col>
            <Space direction="vertical" size={25} style={{ display: "flex" }}>
              <SecondryText>
                Resources <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Recipe dirctory
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Help center
                <br />
              </SecondryText>
              <SecondryText style={{ fontWeight: "normal" }}>
                Privacy nd terms
                <br />
              </SecondryText>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Content>
  );
};
