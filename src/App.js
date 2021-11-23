import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
