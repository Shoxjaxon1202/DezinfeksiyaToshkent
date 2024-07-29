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
            <li className="item">Асосий</li>
            <li id="turshak" className="item">
              <span>Биз</span>
              <span>ҳақимизда</span>
            </li>
            <li className="item">Хизматлар</li>
            <li className="item">ФАҚ</li>
          </ul>
          <div className="navbar__right">
            <select name="" id="">
              <option value="">O'zbekcha</option>
              <option value="">Ruscha</option>
            </select>
            <button className="navbar_btn">Богланиш</button>
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
