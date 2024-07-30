import React, { Component } from "react";
import "./footer.scss";

import location from "../../img/location.png";
import logo from "../../img/logo.png";
import tel from "../../img/tel.png";
import arrow from "../../img/arrow.png";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr className="footer_hr" />
        <footer className="footer">
          <div className="footer_left">
            <img src={logo} alt="" className="logo footer_logo" />
          </div>
          <div className="footer_right">
            <a href="#intro" className="footer__link">
              <div data-aos="fade-right" className="footer_card">
                <img src={location} alt="" className="footer_card_img" />
                <p className="footer_text">Ўзбекистон, Тошкент шаҳри</p>
                <img src={arrow} alt="" className="footer_card_img" />
              </div>
            </a>
            <a href="#info" className="footer__link">
              <div data-aos="fade-right" className="footer_card">
                <img src={tel} alt="" className="footer_card_img" />
                +998 99 119 99 33
                <p className="footer_text"></p>
                <img src={arrow} alt="" className="footer_card_img" />
              </div>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
