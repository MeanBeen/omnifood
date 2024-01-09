import { Layout } from "antd";
import Navbar from "./App/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Container/HomePage";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <Navbar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="homepage" element={<HomePage />} />
      </Routes>
    </Content>
  );
};

export default App;
