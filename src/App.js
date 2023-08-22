import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Progress, Input, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Update from './pages/Update';
import Topic from './pages/Topic';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu inverted widths={3}>
          <Menu.Item as={Link} to="/">Home</Menu.Item>
          <Menu.Item>
            <h4 style={{ color: "white", textAlign: "center" }}>
              우리를 위한 AI 포털 For you, for we
            </h4>
          </Menu.Item>
          <Menu.Item as={Link} to="#">Join</Menu.Item>
        </Menu>
        <Progress percent={85} color='blue' />
        <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}></div>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update" element={<Update/>} />
          <Route path="/topic" element={<Topic/>} />
          {/* 다른 라우트 설정도 추가할 수 있습니다. */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
