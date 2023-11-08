import logo from "./logo.svg";
import "./App.css";
import Join from "./component/Join";
import { Button, Space, DatePicker, version } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* antd 튜토리얼 샘플 가져오기 테스트 */}
        <div style={{ padding: "0 24px" }}>
          <h1>antd version: {version}</h1>
          <Space>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
          </Space>
        </div>
        {/* antd 튜토리얼 샘플 가져오기 테스트 */}
        <Join />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
