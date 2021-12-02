import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { StateProvider } from "./contexts/StateContext";

export default function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </StateProvider>
  );
}
