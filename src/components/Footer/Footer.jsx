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
          <a href="tel:+998991199933" rel="nofollow" className="btn-call">
            <div className="btn-call__ico">
              {/* <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
              </svg> */}
              <div className="content">
                <span className="icon-phone trin-trin"></span>
              </div>
            </div>
          </a>
        </footer>
      </div>
    );
  }
}
