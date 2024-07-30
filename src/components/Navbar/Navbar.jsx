import React, { Component } from "react";
import logo from "../../img/logo.png";
import "./navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar__container">
          <img src={logo} alt="logo" className="navbar__logo" />
          <ul className="list">
            <li className="item">
              <a href="#intro" className="navbar__link">
                Асосий
              </a>
            </li>
            <li id="turshak" className="item">
              <a href="#haqida" className="navbar__link">
                <span>Биз</span>
                <span>ҳақимизда</span>
              </a>
            </li>
            <li className="item">
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
            <select name="" id="">
              <option value="">O'zbekcha</option>
              <option value="">Ruscha</option>
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
