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
  Card,
} from "antd";
import { PrimaryText, PrimaryTitle, SecondryText } from "../../globalStyles";
import { Test } from "../../utils/constant";
import { useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { getFoodsFetch } from "../../Redux/Slice/FoodSlice";
import { StyledImageFood } from "./style";
const { Content } = Layout;
const { Text, Title } = Typography;

const Testimonials = () => {
  const foods = useSelector((state) => state.foods.foods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodsFetch());
  }, []);
  console.log(foods);
  return (
    <Content>
      <Row align={"middle"} style={{ background: "#fdf2e9" }}>
        <Col style={{ paddingLeft: 30 }} span={14}>
          <PrimaryText>TESTIMONIALS</PrimaryText>

          <PrimaryTitle>Once you try it, you can't go back</PrimaryTitle>

          <Row gutter={[25, 25]}>
            {Test.map((data) => (
              <Col span={12}>
                <Avatar size={64} src={data.imageUrl} />
                <Row>
                  <SecondryText
                    style={{
                      fontWeight: "normal",
                      width: "60%",
                      marginTop: 10,
                    }}
                  >
                    {data.text}
                  </SecondryText>
                </Row>
                <Title style={{ opacity: "60%" }} level={5}>
                  {data.text2}
                </Title>
              </Col>
            ))}
          </Row>
        </Col>

        <Col span={10}>
          <Row gutter={[16, 16]}>
            {foods.map((data) => (
              <Col span={8}>
                <StyledImageFood
                  preview={false}
                  width={250}
                  src={data.strMealThumb}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default Testimonials;
