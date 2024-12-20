import { Route, Link, Routes} from "react-router-dom"
import { Layout, Typography, Space } from "antd";
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from "./components";
import "./App.css"

function App() {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar />
      </div>

        <div className="main">
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route path="/news" element={<News />} />
                    </Routes>
                </div>
            </Layout>

        <div className="footer">
            <Typography.Title level={5} style={{color:"white" , textAlign: "center"}}>
                Crypto <br />
                All Rights Reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="https://portfolio-v2-rosy-five.vercel.app/" target="_blank">My Portfolio</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
        </div>
    </div>
  );
}

export default App;
