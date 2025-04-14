
import React from "react";
import ReactDOM from "react-dom";
import PriceChart from "./components/PriceChart";
import DashboardStats from "./components/DashboardStats";
import Alerts from "./components/Alerts";
import { requestPermissionAndGetToken } from "./firebase-messaging";

requestPermissionAndGetToken();

const App = () => (
  <div style={{ padding: 20 }}>
    <h1>Bitcoin Tracker</h1>
    <PriceChart />
    <DashboardStats />
    <Alerts />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
