import React, { Component } from "react";
import "./intro.scss";
import dizinfeksiyachi from "../../img/dizinfeksiyachi.jpg";
export default class Intro extends Component {
  render() {
    return (
      <div id="intro" className="intro">
        <div className="intro_left">
          <h1 data-aos="zoom-out-right" className="intro_title">
            Дизинфексия хизмати
          </h1>
          <p data-aos="zoom-out-right" className="intro_text">
            Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини олиб
            борамиз, шунинг учун биринчи марта зараркунандалардан қандай
            қутулишни биламиз.
          </p>

          <a href="#info" className="navbar__link">
            <button
              data-aos="zoom-out-right"
              className="navbar_btn intro_btn navbar_btn">
              Богланиш
            </button>
          </a>
        </div>
        <div className="intro_imgs">
          
        </div>

        <div className="intro_right"></div>
      </div>
    );
  }
}
