import React, { Component } from "react";
import "./intro.scss";
import tozalash from "../../img/tozalash.png";
import dizinfeksiyachi from "../../img/dizinfeksiyachi.jpg"
export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro_left">
          <h1 data-aos="zoom-out-right" className="intro_title">
            Дизинфексия хизмати
          </h1>
          <p data-aos="zoom-out-right" className="intro_text">
            Биз Тошкентда 10 йилдан бери профессионал дезинфексия ишларини олиб
            борамиз, шунинг учун биринчи марта зараркунандалардан қандай
            қутулишни биламиз.
          </p>
          <button data-aos="zoom-out-right" className="navbar_btn intro_btn" >
            Богланиш
          </button>
        </div>
        <div className="intro_imgs">
          <img src={tozalash} alt="" className="tozalash1" />
        </div>

        <div className="intro_right">
        </div>
      </div>
    );
  }
}
