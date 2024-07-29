import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Haqida from "./components/Haqida/Haqida";
import Klapa from "./components/Klapa/Klapa";
import Xizmatlar from "./components/Xizmatlar/Xizmatlar";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Services from "./components/Services/Services";
import Kafolat from "./components/Kafolat/Kafolat";
import Faq from "./components/Faq/Faq";
import Info_dezinfeksiya from "./components/Info_dezinfeksiya/Info_dezinfeksiya";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ..
AOS.init();

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ToastContainer />

        <div className="wrapper">
          <Intro />
          <main>
            <Haqida />
            <Klapa />
            <Xizmatlar />
            <Services />
            <Kafolat />
            <Faq />
            <Info_dezinfeksiya />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}
