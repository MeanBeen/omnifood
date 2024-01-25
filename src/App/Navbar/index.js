import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Row, Image, Col } from "antd";
import { StyledButton } from "./style";
import Popovers from "../../Components/Popover";
import { PrimaryButton } from "../../globalStyles";

const { Content } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Content>
      <Row
        align={"middle"}
        justify="space-between"
        style={{ background: "#fdf2e9", padding: "14px 40px" }}
      >
        <Col>
          <Image
            onClick={() => navigate("/homepage")}
            preview={false}
            width={165}
            src="https://omnifood.dev/img/omnifood-logo.png"
          />
        </Col>
        <Col>
          <Row>
            <Popovers />
            <PrimaryButton>Try for free</PrimaryButton>
          </Row>
        </Col>
      </Row>

      <Outlet />
    </Content>
  );
};

export default Navbar;
