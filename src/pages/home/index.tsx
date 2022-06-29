import React from "react";
import "./index.css";
import "@fontsource/noto-sans";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
