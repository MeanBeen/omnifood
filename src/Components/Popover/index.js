import React from "react";
import { Layout, Button } from "antd";
import { StyledPopover } from "./style";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const Popovers = () => {
  const navigate = useNavigate();
  return (
    <Content>
      <StyledPopover>
        <Button onClick={() => navigate("/step")}>How it Works</Button>
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
    </Content>
  );
};

export default Popovers;
