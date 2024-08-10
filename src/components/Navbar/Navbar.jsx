import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar__container">
          <a className="navbar__logo" href="#intro">
            <img src={logo} alt="logo" className="navbar__logo" />
          </a>
          <ul className="list">
            <li className="item">
              <a href="#intro" className="navbar__link">
                Асосий
              </a>
            </li>
            <a href="#haqida" className="navbar__link">
              <li id="turshak" className="item">
                <span>Биз</span>
                <span>ҳақимизда</span>
              </li>
            </a>

            <li className="item" id="margin">
              <a href="#xizmatlar" className="navbar__link">
                Хизматлар
              </a>
            </li>
            <li className="item">
              <a href="#faq" className="navbar__link">
                ФАҚ
              </a>
            </li>
          </ul>
          <div className="navbar__right">
            <select className="navbar__select" name="" id="">
              <option value="">Ўзбекча</option>
              <option value="">Русский</option>
            </select>

            <a href="#info" className="navbar__link">
              <button className="navbar_btn">Богланиш</button>
            </a>

            <span className="navbar__burger">
              <hr className="navbar_hr" />
              <hr className="navbar_hr" />
              <hr className="navbar_hr" />
            </span>
          </div>
        </nav>
      </div>
    );
  }
}
