import GlobalStyle from "./globalStyles";
import { ConfigProvider, Layout } from "antd";
import Navbar from "./App/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Container/HomePage";
import { Steps } from "./Components/Steps";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <ConfigProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="step" element={<Steps />} />
        </Routes>
      </ConfigProvider>
    </Content>
  );
};

export default App;
