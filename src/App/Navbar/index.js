import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Row, Image, Popover, Col, Button, Space } from "antd";
import { StyledButton, StyledPopover } from "./style";

const { Content } = Layout;

const Navbar = () => {
  return (
    <Content>
      <Row
        align={"middle"}
        justify="space-between"
        style={{ background: "#fdf2e9", padding: "14px 40px" }}
      >
        <Col>
          <Image
            preview={false}
            width={165}
            src="https://omnifood.dev/img/omnifood-logo.png"
          />
        </Col>
        <Col>
          <Space wrap>
            <StyledPopover>
              <Button>How it Works</Button>
            </StyledPopover>
            <StyledPopover>
              <Button>Meals</Button>
            </StyledPopover>
            <StyledPopover>
              <Button>Testimonials</Button>
            </StyledPopover>
            <StyledPopover>
              <Button>Pricing</Button>
            </StyledPopover>
            <StyledButton>Try for free</StyledButton>
          </Space>
        </Col>
      </Row>

      <Outlet />
    </Content>
  );
};

export default Navbar;
