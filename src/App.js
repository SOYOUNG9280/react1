import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button, Progress, Input, Menu, Grid } from 'semantic-ui-react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Switch를 Routes로 변경
import SignUp from './pages/SignUp'; // 대문자로 시작한 파일명으로 수정


function Login() { // 이름을 Login으로 변경합니다.
  return (
    <Grid columns={1} centered>
      <Grid.Column style={{ textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Input placeholder="사번" style={{ width: "300px" }} />
          <br />
          <Input placeholder="비밀번호" type="password" style={{ width: "300px" }} />
          <br />
          <Button onClick={() => alert("버튼이 눌림")} primary size="big" style={{ width: "300px" }}>
            로그인
          </Button>

        </div>
      </Grid.Column>
    </Grid>
  );
}

function App() {
  return (
    <div>
      <Menu inverted widths={3}>
        <Menu.Item as={Link} to="/">Home</Menu.Item>
        <Menu.Item>
          <h4 style={{ color: "white", textAlign: "center" }}>
            우리를 위한 AI 포털 For you, for we
          </h4>
        </Menu.Item>
        <Menu.Item as={Link} to="/signup">Sign Up</Menu.Item>
      </Menu>
      <Progress percent={85} color='blue' />
      <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}></div>
      <Login />
      <BrowserRouter>
        <Routes> {/* Switch 대신 Routes 사용 */}
          <Route path="/signup" element={<SignUp />} />
          {/* 다른 라우트 설정도 추가할 수 있습니다. */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

