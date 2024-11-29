import React from "react";
import "./App.css";
import Header from "./assets/header/header";
import Login from "./assets/login/login";

export default function App() {
  return (
    <div className="h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}