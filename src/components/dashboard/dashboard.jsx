import React from "react";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="board">
      <div
        className="card"
        onClick={() => {
          navigate("/start");
        }}
      >
        Start Polling
      </div>
      <div
        className="card"
        onClick={() => {
          navigate("/view");
        }}
      >
        View Polling
      </div>
    </div>
  );
}
